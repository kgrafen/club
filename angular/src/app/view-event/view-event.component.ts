import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router, } from "@angular/router";
import { Event } from '../entity/event/event.model';
import { EventFirebaseService } from '../event-firebase.service';
import { UserFirebaseService } from '../user-firebase.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { unescapeIdentifier } from '@angular/compiler';
import { MobileDetectorService } from '../mobile-detector.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  isMobile = false;

  selectedEvent: Event;
  key;
  pKey = "";
  participantsDisplayNames = [];
  participantsData = []
  inQueue = [];

  // Test
  isParticipating: boolean = false;

  constructor(private route: ActivatedRoute, private efbs: EventFirebaseService, 
    private ufbs: UserFirebaseService, private router: Router, 
    private md: MobileDetectorService, private authService: AuthService) { 
    this.route.queryParams.subscribe(params => {
      let key = params['key'];
      this.key = key;
      
      this.efbs.getEventByKey(key).snapshotChanges().subscribe(then => {
        this.selectedEvent = new Event(then.payload.val());
        this.participantsData = [];
        this.participantsDisplayNames = [];
        for (let property in this.selectedEvent.participants) {
          for (let value in this.selectedEvent.participants[property]) {
              this.participantsDisplayNames.push(this.selectedEvent.participants[property][value]);
              this.participantsData.push({key: property, username: this.selectedEvent.participants[property][value]});
          }
        }

        if (this.getParticipantKey() !== "Not Found") {
          this.isParticipating = true;
        }
      })
    });
  }

  ngOnInit() {
    this.isMobile = this.md.check();
  }

  getParticipantKey(): string {
    let result = "Not Found";
    for (let i = 0; i < this.participantsData.length; i++) {
      if (this.participantsData[i].username === this.ufbs.getStorage().username) {
        return this.participantsData[i].key;
      }
    }
    return result;
  }

  removeParticipant() {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshot => {
      let u: User = new User(snapshot);
      for (let i = 0; i < this.participantsData.length; i++) {
        if (this.participantsData[i].username === u.username)  {
          this.participantsData.splice(i, 1);
          this.participantsDisplayNames.splice(i, 1);
        }
      }
    });
  }

  onAttend() {

    this.efbs.joinEvent(this.key, this.authService.afAuth.auth.currentUser.uid);
    this.isParticipating = true;
    this.updateUserAttended(1);
  }

  onUnattend() {
    this.efbs.leaveEvent(this.key, this.getParticipantKey());
    this.removeParticipant();
    this.isParticipating = false;
    this.updateUserAttended(-1);
  }

  updateUserAttended(value) {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshot => {
      let u: User = new User(snapshot);
      this.ufbs.updateUser({numberOfEventsAttended: u.numberOfEventsAttended + value}, this.authService.afAuth.auth.currentUser.uid)
    });
  }
  
  onRateClick() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "key": this.key
      }
    }
    this.router.navigate(['/rate-event'], navigationExtras);
  }
}
