import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionData } from '../my-event/my-event.component';
import { EventFirebaseService } from '../event-firebase.service';

@Component({
  selector: 'app-participant-list-actions',
  templateUrl: './participant-list-actions.component.html',
  styleUrls: ['./participant-list-actions.component.css']
})
export class ParticipantListActionsComponent implements OnInit {

  uid: string = "";
  key: string = "";
  un: string = "";

  constructor(public dialogRef: MatDialogRef<ParticipantListActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActionData, private efbs: EventFirebaseService) {
      this.uid = data.uid;
      this.key = data.key;
      this.un = data.un;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  moveToQueue() {
    console.log(this.key, this.uid, this.un);
    this.efbs.leaveEvent(this.key, this.uid);
    this.efbs.joinQueue(this.key, this.uid, this.un);
    this.dialogRef.close();
  }

  moveToParticipants() {
    console.log(this.key, this.uid, this.un);
    this.efbs.joinEvent(this.key, this.uid, this.un);
    this.efbs.leaveQueue(this.key, this.uid);
    this.dialogRef.close();
  }

  remove() {
    console.log(this.key, this.uid);
    this.efbs.leaveEvent(this.key, this.uid);
    this.dialogRef.close();
  }
}
