import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { EventFirebaseService } from '../event-firebase.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface EventData {
  name: string;
  address: string;
  distance: number;
  genderRatio: string;
  targetGroup: boolean;
  available: number;
}

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  dataSource = new MatTableDataSource<EventData>();
  displayedColumns = ['name', 'address', 'distance', 'genderRatio', 'targetGroup', 'available'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  events = [];
  
  constructor(private db: AngularFireDatabase, private efbs: EventFirebaseService) {
    this.efbs.getList(this.efbs.dbPath).subscribe(res => {
      this.events = res;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (error) => {console.log("Something went wrong :(")
  });
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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

