import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, } from "@angular/router";
import { Event } from '../entity/event/event.model';
import { EventFirebaseService } from '../event-firebase.service';
import { UserFirebaseService } from '../user-firebase.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  selectedEvent: Event;
  key;
  participants = [];
  inQueue = [];

  // Test
  isParticipating: boolean = false;

  constructor(private route: ActivatedRoute, private efbs: EventFirebaseService, 
    private ufbs: UserFirebaseService) { 
    this.route.queryParams.subscribe(params => {
      let key = params['key'];
      this.key = key;
      this.efbs.getEventByKey(key).valueChanges().subscribe(then => {
        this.selectedEvent = Object.assign(new Event(), then);
        
        for (let property in this.selectedEvent.participants) {
          for(let username in this.selectedEvent.participants[property])
              this.participants.push(this.selectedEvent.participants[property][username])
        }
      })
    });
  }

  ngOnInit() {
    
  }

  participationSimulation() {
    if (!this.isParticipating) {
      this.efbs.joinEvent(this.key, this.ufbs.getStorage()._username);
    } else {
      this.efbs.leaveEvent(this.key, this.ufbs.getStorage()._username);
    }
    this.isParticipating = !this.isParticipating;
  }

}
