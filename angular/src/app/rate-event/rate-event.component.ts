import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserFirebaseService } from '../user-firebase.service';
import { EventFirebaseService } from '../event-firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../entity/event/event.model';
import { User } from '../entity/user/user';
import { RatingService } from '../rating.service';
import { Rating } from '../entity/rating/rating.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {

  ratingForm = new FormControl();
  event: Event;

  constructor(private ufbs: UserFirebaseService, private efbs: EventFirebaseService, 
    private route: ActivatedRoute, private rs: RatingService, private authService: AuthService) {
      this.route.queryParams.subscribe(params => {
        this.efbs.getEventByKey(params['key']).snapshotChanges().subscribe(res => {
          this.event = Object.assign(res.payload.val());
          this.event.key = res.key;
          console.log(this.event, res);
        });
      });
     }

  ngOnInit() {
  }

  rate(scoreValueFromForm) {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshot => {
      let r = new Rating();
      let u: User = new User(snapshot);
      r.score = scoreValueFromForm
      r.fk_event = this.event.key;
      r.fk_host = this.event.host;
      r.byUser = u.username;
      this.rs.insertRating(r);
    });
  }

}
