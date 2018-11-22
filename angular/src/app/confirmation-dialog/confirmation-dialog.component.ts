import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventFirebaseService } from '../event-firebase.service';
import { DialogData } from '../entity/helper/dialog-data.interface';
import { UserFirebaseService } from '../user-firebase.service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  key: string = "";
  buttonNo = this.data.buttonNo;
  buttonYes = this.data.buttonYes;
  dialogText = this.data.dialogText;
  reason = "";

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private efbs: EventFirebaseService,
    private ufbs: UserFirebaseService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() : void {
    if (this.data.key.length > 6) {

      if (this.reason = "") {
        const observer = this.ufbs.getUserByID(this.ufbs.afAuth.auth.currentUser.uid).subscribe( (userSnapshot:any) => {
          this.reason = `Kære tilmeldte. 
          Jeg er desværre blevet forhindret i at afholde det opslåede event: ${this.data.e.name} den ${this.data.e.dateStart}.
          Jeg håber, at du tilmelder dig næste gang!
          Mvh ${userSnapshot.username}`;
          const mergedObj = {...this.data.e, ...{deleted: this.reason}};
          this.efbs.deleteEvent(this.data.key);
          observer.unsubscribe();
        });
      } else {
        const mergedObj = {...this.data.e, ...{deleted: this.reason}};
        this.efbs.deleteEvent(this.data.key);
      }
    }
    this.onNoClick();
  }

  ngOnInit() {

  }

}
