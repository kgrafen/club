import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EventFirebaseService {

  eventsObservable: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  getEvents() {
    this.eventsObservable = this.get('/events');
  }

  get(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  insertEvent(formData) {
    
  }

}
