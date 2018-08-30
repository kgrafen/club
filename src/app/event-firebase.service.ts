import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

// Entity
import { Event } from './entity/event/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventFirebaseService {

  dbPath: string = '/events';
  item: Observable<any>  = null; //   single object

  eventsObservable: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  getEvents() {
    this.eventsObservable = this.getList(this.dbPath);
  }

  getList(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getEventByKey(key: string) {
    
  }

  insertEvent(event: Event) {
    const entry = this.objToJSON(event);
    this.db.object(this.dbPath+"/"+this.generateNewHashKey("", "")).update(entry);
  }

  updateEvent(key: string, event: Event) {
    const eventsRef = this.db.list(this.dbPath);
    eventsRef.set('key', event);
  }

  deleteEvent(key: string) {
    const itemsRef = this.db.list(this.dbPath);
    itemsRef.remove(key);
  }

  joinEvent(key: string, username: string) {
    this.db.object(this.dbPath+"/"+key+"/participants").update('username');
  }

  leaveEvent(key: string, username: string) {
    const itemRef = this.db.object(this.dbPath+"/"+key+"participants/"+username);
    itemRef.remove();
  }

  generateNewHashKey(username: string,  title: string): string {
    const date: Date = new Date();
    const stringify = username + date.getHours() + ":" + this.addZeroesToTime(date.getMinutes()) + title;
    return stringify;
  }

  private addZeroesToTime(input: number): any {
    return input < 10 ? "0" + input : input;
  }

  objToJSON(userObject : Event): string {
    return JSON.parse(JSON.stringify(userObject));
  }

}
