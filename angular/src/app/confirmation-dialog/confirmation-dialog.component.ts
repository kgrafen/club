import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventFirebaseService } from '../event-firebase.service';
import { DialogData } from '../entity/helper/dialog-data.interface';

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

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private efbs: EventFirebaseService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() : void {
    if (this.data.key.length > 6) {
      this.efbs.deleteEvent(this.data.key);
    }
    this.onNoClick();
  }

  ngOnInit() {

  }

}
