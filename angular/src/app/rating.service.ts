import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase } from '../../node_modules/@angular/fire/database';
import { JsonConverter } from './entity/helper/json-converter';
import { Rating } from './entity/rating/rating.model';
import { User } from './entity/user/user';
import { UserFirebaseService } from './user-firebase.service';
import { EventFirebaseService } from './event-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  dbPath: string = '/ratings/';

  usersObservable: Observable<any[]>;

  jsonConverter: JsonConverter = new JsonConverter();

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, 
    private ufbs: UserFirebaseService, private efbs: EventFirebaseService) { }

  getRecentRatingsForUserByID(id: string) : Observable<any[]>  {
    return this.db.list(this.dbPath, ref => ref.orderByChild('fk_host').equalTo(id)).snapshotChanges().map(events => {
      return events.map(c => ({key: c.payload.key, ...c.payload.val()}));
    });
  }

  getRatings() {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  insertRating(rating: Rating) {
    return this.db.list(this.dbPath).push(rating).once('value').then(() => {
      this.updateUsersRating(rating.fk_host);
    });
  }

  updateRating(rating: Rating, key: string) {
    return this.db.object(this.dbPath+key).update(rating).then( () => {
      this.updateUsersRating(rating.fk_host);
    });
  }

  hasUserRatedTheEvent(eid: string) {
    return this.db.list(this.dbPath, ref => ref.orderByChild('fk_event').equalTo(eid)).snapshotChanges();
  }

  updateUsersRating(uid) {
    let r = 0;
    let observer = this.getRatings().subscribe(snapshots => {
      let userScore = 0;
      let count = 0;
      snapshots.forEach((snapshot: any) => {
        if(snapshot.payload.val().fk_host === uid) {
          userScore += Number(snapshot.payload.val().score);
          count++;
        }
      });
      if (userScore > 0 && count > 0) {
        r = userScore / count;
      }
      this.ufbs.updateUser({rating: r}, uid);
      observer.unsubscribe();
    });
  }

}
