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

@Injectable({
  providedIn: 'root'
})
export class EventFirebaseService {

  dbPath: string = '/events/';
  jsonConverter: JsonConverter = new JsonConverter();

  eventsObservable: Observable<any[]>;
  myEventSelection: Event;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, 
    private ws: WallService) { }

  getList(listPath): Observable<any> {
    return this.db.list(this.dbPath).snapshotChanges().map(events => {
      return events.map(c => ({key: c.payload.key, ...c.payload.val()}))
    });
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
    return this.db.list(this.dbPath).push(event);
  }

  updateEvent(key: string, e: Event) {
    console.log(key, e);
    const eventsRef = this.db.object(this.dbPath+key);
    return eventsRef.update(e);
  }

  deleteEvent(key: string) {
    const itemsRef = this.db.list(this.dbPath);
    itemsRef.remove(key).then( () => {
      this.ws.getWallByKey(key).subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.ws.deleteWall(snapshot.key);
        });
      });
    });
  }

  joinEvent(key: string, un: string) {
    const itemRef = this.db.list(this.dbPath + key + '/participants/');
    itemRef.push({username: un});
  }

  leaveEvent(key: string, pKey: string) {
    const itemRef = this.db.object(this.dbPath+"/"+key+"/participants/"+ pKey);
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

}
