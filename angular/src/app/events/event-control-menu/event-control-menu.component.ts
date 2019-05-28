import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNewEventComponent } from '../../create-new-event/create-new-event.component';
import { MobileDetectorService } from '../../mobile-detector.service';
import { window } from 'rxjs/operators';

@Component({
  selector: 'event-control-menu',
  templateUrl: './event-control-menu.component.html',
  styleUrls: ['./event-control-menu.component.css']
})
export class EventControlMenuComponent implements OnInit {

  dialogWidth = screen.width / 1.25 + "px";
  dialogHeight = screen.height / 1.75 + "px";

  constructor(public dialog: MatDialog, private mds: MobileDetectorService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateNewEventComponent, {
      width: this.dialogWidth,
      height: this.dialogHeight,
      // disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
