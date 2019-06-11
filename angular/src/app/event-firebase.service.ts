import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

// Entity
import { Event } from './entity/event/event.model';
import { JsonConverter } from './entity/helper/json-converter';
import { WallService } from './wall.service';
import { Wall } from './entity/wall/wall.model';
import { refCount } from 'rxjs/operators';
import { UserFirebaseService } from './user-firebase.service';
import { User, Gender } from './entity/user/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EventFirebaseService {

  dbPath: string = '/events_geo/';
  jsonConverter: JsonConverter = new JsonConverter();

  eventsObservable: Observable<any[]>;
  myEventSelection: Event;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, 
    private ws: WallService, private ufbs: UserFirebaseService, private toast: ToastrService) { }

  getList() {
    return this.db.list(this.dbPath).snapshotChanges().map(events => {
      return events.map(c => ({key: c.payload.key, ...c.payload.val()}))
    });
  }

  getEvents() {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  getEventByKey(key: string): AngularFireObject<Event>{
    const itemPath = this.dbPath + key;
    return this.db.object(itemPath);
  }

  getEventsByHost(id: string): Observable<any[]> {
    let path = this.dbPath;
    return this.db.list(path, ref => ref.orderByChild('host').equalTo(id)).snapshotChanges().map(events => {
      return events.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  insertEvent(event: Event) {
    const timestamp = {timestamp: new Date().toString()};
    let merged: Event = {...event, ...timestamp};
    return this.db.list(this.dbPath).push(merged);
  }

  updateEvent(key: string, e: Event) {
    
    const eventsRef = this.db.object(this.dbPath+key);
    return eventsRef.update(e);
  }

  deleteEvent(key: string, reason="") {
    const itemsRef = this.db.list(this.dbPath);
    itemsRef.update(key, {deleted: reason});
    itemsRef.remove(key).then( () => {
      let observer = this.ws.getWallByKey(key).subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.ws.deleteWall(snapshot.key);
          observer.unsubscribe();
        });
      });
    });
  }

  joinEvent(key: string, uid: string, un: string) {
    const itemRef = this.db.object(this.dbPath + key + '/participants/' + uid);
    itemRef.update({username: un});
  }

  leaveEvent(key: string, uid: string) {
    const itemRef = this.db.object(this.dbPath+"/"+key+"/participants/"+ uid);
    itemRef.remove();
    this.leaveQueue(key, uid);
  }

  joinQueue(key: string, uid: string, un: string) {
    const itemRef = this.db.object(this.dbPath + key + '/inQueue/' + uid);
    itemRef.update({username: un});
  }

  leaveQueue(key: string, uid: string) {
    const itemRef = this.db.object(this.dbPath+"/"+key+"/inQueue/"+ uid);
    itemRef.remove();
  }

  generateNewHashKey(username: string,  title: string): string {
    const date: Date = new Date();
    const stringify = username + "_" + date.getHours() + ":" + this.addZeroesToTime(date.getMinutes()) + "_" + title;
    return stringify;
  }

  private addZeroesToTime(input: number): any {
    return input < 10 ? "0" + input : input;
  }

  objToJSON(eventObject : Event): string {
    return JSON.parse(JSON.stringify(eventObject));
  }

  
  jsonToObj(json: string): Event {
    return this.jsonConverter.convertJsonToEventObj(json);
  } 

  signupVerification(key: string, user: User) {
    return new Promise(async (resolve, reject) => {
      
      let observer = this.db.object(this.dbPath+key).snapshotChanges().subscribe( eventSnapshot => {
        
        const payload = eventSnapshot.payload.val();
        const participants = Object.keys(payload.participants).length;
        const max = payload.maxGuests;
        const genCriteria = payload.genderRatio;
        const childCriteria = payload.targetGroup;
        /* Availability check */
        const availResult: boolean = participants < max ? true : false;
        /* Criteria check */
        let genResult: boolean;
        
        switch(genCriteria) {
          case 'Kun for mænd':
            genResult = user.gender.toString() === "Mand" ? true : false;
            break;
          case 'Kun for kvinder':
            genResult = user.gender.toString() === "Kvinde" ? true : false;
            break;
          case '50/50':
            let userList = [];
            Object.keys(payload.participants).forEach(p => {
              const observerTwo = this.ufbs.getUserByID(payload.participants[p].fk_id).subscribe( userSnapshot => {
                userList.push(userSnapshot);
              });
              observerTwo.unsubscribe();
            });
            const dist = this.ufbs.userDistribution(userList);
            if (user.gender === Gender.MALE) {
              genResult = dist.male < dist.female ? true : false;
            } else {
              genResult = dist.female < dist.male ? true : false;
            }
            break;
          default:
            genResult = true;
            break;
        }
        let childResult: boolean;
        switch(childCriteria) {
          case 'Kun med børn':
            childResult = user.numberOfChildren > 0 ? true : false;
            break;
          default:
            childResult = true;
            break;
        }
        let activatedResult: boolean = user.isActivated === true ? true : false;
        /* Do */
        if (genResult && childResult && availResult && activatedResult) {
          this.joinEvent(key, this.afAuth.auth.currentUser.uid, user.username);
          resolve(true);
        } else {
          let criteria: string = "";
          
          if (!genResult) {
            criteria += genCriteria + ", ";
          } 
          if (!childResult) {
            criteria += childCriteria + ", ";
          }
          if (!activatedResult) {
            criteria += activatedResult + ", ";
          }
  
          if (availResult) {
            this.toast.warning('Du opfylder ikke kriterierne: ' + criteria,'Hov!');
          } else if (activatedResult) {
            this.joinQueue(key, this.afAuth.auth.currentUser.uid, user.username);
            this.toast.info('Alle pladser er optaget, så du er landet på ventelisten','Info');
            resolve(true);
          } else {
            this.toast.warning('🤖 Serveren informerer mig, at tilmelding kræver en aktiv/synlig profil','Hov!');
          }
          
        }
        resolve(false);
        observer.unsubscribe();
      });
    });
  }
}
