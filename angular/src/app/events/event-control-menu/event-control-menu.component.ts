import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNewEventComponent } from '../../create-new-event/create-new-event.component';
import { MobileDetectorService } from '../../mobile-detector.service';
import { window } from 'rxjs/operators';
import { NewEventComponent } from '../new-event/new-event.component';

@Component({
  selector: 'event-control-menu',
  templateUrl: './event-control-menu.component.html',
  styleUrls: ['./event-control-menu.component.css']
})
export class EventControlMenuComponent implements OnInit {

  @Output() showMyEvents = new EventEmitter();

  dialogWidth = screen.width / 1.25 + "px";
  dialogHeight = screen.height / 1.75 + "px";
  myEventsShown: boolean = false;

  constructor(public dialog: MatDialog, private mds: MobileDetectorService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewEventComponent, {
      width: this.dialogWidth,
      panelClass: "new-event-panel"
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  displayMyEventsOnly() {
    this.myEventsShown = !this.myEventsShown;
    this.showMyEvents.emit(this.myEventsShown);
  }

}
