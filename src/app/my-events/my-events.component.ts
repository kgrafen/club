import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { EventFirebaseService } from '../event-firebase.service';
import { MobileDetectorService } from '../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserFirebaseService } from '../user-firebase.service';

export interface EventData {
  name: string;
  address: string;
  distance: number;
  genderRatio: string;
  targetGroup: boolean;
  available: number;
}

export interface EventDataMobile {
  name: string;
  address: string;
  available: number;
}



@Component({
  selector: 'my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  isMobile = false;

  dataSource = new MatTableDataSource<EventData>();
  displayedColumns = ['name', 'address', 'distance', 'genderRatio', 'targetGroup', 'available'];
  dataSourceMobile = new MatTableDataSource<EventDataMobile>();
  displayedColumnsMobile = ['name', 'address', 'available'];

  events = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private efbs: EventFirebaseService, private mds: MobileDetectorService, 
    private spinner: NgxSpinnerService, private ufbs: UserFirebaseService) {
      console.log("Før res");
      this.efbs.getEventsByHost(this.ufbs.getStorage().email).subscribe(res => {
        console.log("Res er hvad? " + res);
      });
    }

  ngOnInit() {
    console.log("Hallo?");
  }

}
