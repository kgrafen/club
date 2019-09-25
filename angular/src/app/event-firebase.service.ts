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
    event.creationDate  = {timestamp: new Date().getTime()};
    return this.db.list(this.dbPath).push(event);
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
        let message : string;
        
        switch(genCriteria) {
          case 'only_men':
            message  = user.gender.toString() === "Mand" ? '' : 'Dette event er kun for mænd';
            break;
          case 'only_women':
            message  = user.gender.toString() === "Kvinde" ? '' : 'Dette event er kun for kvinder';
            break;
          case 'equal':
            let userList = [];
            Object.keys(payload.participants).forEach(p => {
              const observerTwo = this.ufbs.getUserByID(payload.participants[p].fk_id).subscribe( userSnapshot => {
                userList.push(userSnapshot);
              });
              observerTwo.unsubscribe();
            });
            const dist = this.ufbs.userDistribution(userList);
            if (user.gender.toString() === "Mand") {
              message = dist.male < dist.female ? '' : 'There is already too many men signed up for this event';
            } else {
              message = dist.female < dist.male ? '' : 'There is already too many women signed up for this event';
            }
            break;
          default:
            message = '';
            break;
        }
        if (!message) {
          switch(childCriteria) {
            case 'only_with_children':
              message = user.numberOfChildren > 0 ? '' : 'Dette event er kun for medlemmere med børn';
              break;
            default:
              message = '';
              break;
          }
        }
        let activatedResult: boolean = user.isActivated === true ? true : false;
        /* Do */
        if (!message && availResult && user.isActivated) {
          this.joinEvent(key, this.afAuth.auth.currentUser.uid, user.username);
          resolve(true);
        } else {

  
          if (availResult) {
            this.toast.warning(message, 'Hov!');
          } else if (user.isActivated) {
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
