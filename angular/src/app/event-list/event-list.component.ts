import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { EventFirebaseService } from '../event-firebase.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MobileDetectorService } from '../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  isMobile = false;

  dataSource = new MatTableDataSource<EventData>();
  displayedColumns = ['name', 'address', 'distance', 'genderRatio', 'targetGroup', 'available'];
  dataSourceMobile = new MatTableDataSource<EventDataMobile>();
  displayedColumnsMobile = ['name', 'address', 'available'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  events = [];
  
  constructor(private efbs: EventFirebaseService, 
    private mds: MobileDetectorService, private spinner: NgxSpinnerService) {
    this.efbs.getList(this.efbs.dbPath).subscribe(res => {
      this.events = res;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.dataSourceMobile = new MatTableDataSource(this.events);
      this.dataSourceMobile.paginator = this.paginator;
      this.dataSourceMobile.sort = this.sort;
      this.spinner.hide();
    },
    (error) => {console.log("Something went wrong :(")
  });
  }

  ngOnInit() {
    this.spinner.show();
    this.isMobile = this.mds.check();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSourceMobile.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      this.dataSourceMobile.paginator.firstPage();
    }
  }

  onRowClick(row) {
    console.log("You clicked a row brudda: " + row);
  }

}

export class EventDataSource extends DataSource<any> {
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;
  constructor(private efbs: EventFirebaseService) {
    super();
  }
  connect(): Observable<any[]> {
    return this.efbs.getList(this.efbs.dbPath);
  }
  disconnect() {}
}

