import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription  } from '../../../node_modules/rxjs';
import { EventFirebaseService } from '../event-firebase.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MobileDetectorService } from '../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableFilterService } from '../table-filter.service';
import { Event } from '../entity/event/event.model';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface EventData {
  name: string;
  address: string;
  distance: number;
  genderRatio: string;
  targetGroup: boolean;
  available: number;
  category: string;
  actions: string;
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
  displayedColumns = ['name', 'address', 'category', 'distance', 'genderRatio', 'targetGroup', 'available', 'actions'];
  dataSourceMobile = new MatTableDataSource<EventDataMobile>();
  displayedColumnsMobile = ['name', 'address', 'available'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  events = [];

  subscription: Subscription;
  filterValue: any;
  
  constructor(private efbs: EventFirebaseService, 
    private mds: MobileDetectorService, private spinner: NgxSpinnerService, 
    private tfs: TableFilterService, private router: Router, 
    private toast: ToastrService) {
    this.efbs.getList('events').subscribe(res => {
      this.events = res;
      this.events.splice(0, 1);
      if (this.events.length > 0) {
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSourceMobile = new MatTableDataSource(this.events);
        this.dataSourceMobile.paginator = this.paginator;
        this.dataSourceMobile.sort = this.sort;
        this.spinner.hide();
      } 
    },    (error) => {console.log("Something went wrong :(")
  });
    this.subscription = this.tfs.getEvent().subscribe(filter => { this.applyFilter(filter) });
  }

  ngOnInit() {
    this.spinner.show();
    this.isMobile = this.mds.check();
  }

  ngAfterViewInit() {
    setTimeout( ()=>{
      if (this.events.length < 1) {
        this.spinner.hide();
        this.toast.info("Der er ingen events oprettet", "Info");
      }
      }, 3000)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSourceMobile.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      this.dataSourceMobile.paginator.firstPage();
    }
  }

  onViewClick(element) {
    let e: Event = element;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "key": e.key
      }
    }
    this.router.navigate(['/view-event'], navigationExtras);
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

