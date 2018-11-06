import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList, loadedSnapshotChanges  } from '../../node_modules/angularfire2/database';
import { JsonConverter } from './entity/helper/json-converter';
import { Rating } from './entity/rating/rating.model';
import { User } from './entity/user/user';
import { UserFirebaseService } from './user-firebase.service';
import { EventFirebaseService } from './event-firebase.service';
import { Event } from './entity/event/event.model';


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  dbPath: string = '/ratings/';

  usersObservable: Observable<any[]>;

  jsonConverter: JsonConverter = new JsonConverter();

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, 
    private ufbs: UserFirebaseService, private efbs: EventFirebaseService) { }

  getRatingsWithKey() {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  getRatingsJustValues() {
    return this.db.list(this.dbPath).valueChanges();
  }

  getRecentRatingsForUserByID(id: string) : Observable<any[]>  {
    return this.db.list(this.dbPath, ref => ref.orderByChild('fk_host').equalTo(id)).snapshotChanges().map(events => {
      return events.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  getRatings() {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  insertRating(rating: Rating) {
    this.db.list(this.dbPath).push(rating);
   }

}
