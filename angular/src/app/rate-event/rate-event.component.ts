import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserFirebaseService } from '../user-firebase.service';
import { EventFirebaseService } from '../event-firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../entity/event/event.model';
import { User } from '../entity/user/user';
import { RatingService } from '../rating.service';
import { Rating } from '../entity/rating/rating.model';
import { AuthService } from '../auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {

  ratingForm = new FormControl();
  ratingFormText = new FormControl();
  event: Event;
  hasRated = false;

  constructor(private ufbs: UserFirebaseService, private efbs: EventFirebaseService, 
    private route: ActivatedRoute, private rs: RatingService, private authService: AuthService, 
    private toast: ToastrService, private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.efbs.getEventByKey(params['key']).snapshotChanges().subscribe(res => {
          this.event = Object.assign(res.payload.val());
          this.event.key = res.key;
        });
      });
     }

  ngOnInit() {
  }

  rate(scoreValueFromForm, feedbackValueFromForm: string) {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( (userSnapshot:any) => {
      let r = new Rating();
      r.byUser = userSnapshot.username;
      r.feedback = feedbackValueFromForm;
      r.score = scoreValueFromForm;
      r.fk_event = this.event.key;
      r.fk_host = this.event.host;
      this.rs.updateRating(r, r.byUser+r.fk_event);
    });
  }
}