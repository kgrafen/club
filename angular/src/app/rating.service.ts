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

  updateUserScore(host: string) {
    let userScore = 0;
    let count = 0;
    this.db.list(this.dbPath).snapshotChanges().subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if(snapshot.payload.val().fk_host === host) {
          userScore += snapshot.payload.val().score
          count++;
        }
      })
      this.ufbs.getList('/users/').subscribe(values => {
        let email = "";
        values.forEach(value => {
          console.log(value.email + "=" + host);
          if (value.email === host) {
            let user = Object.assign(value, User);
            user.score = userScore / count;
            this.ufbs.updateUser(user);
          }
        })
      })
    })
  }

  async insertRating(rating: Rating, event: Event) {
    let entry = this.objToJSON(rating);
    this.db.object(this.dbPath + (rating.fk_event+this.ufbs.getStorage()._username)).update(entry);
    //this.db.list(this.dbPath).push(entry);
   }

   private objToJSON(ratingObject : Rating): string {
    return JSON.parse(JSON.stringify(ratingObject));
  }

}
