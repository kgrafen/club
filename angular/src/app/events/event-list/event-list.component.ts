import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EventFirebaseService } from '../../event-firebase.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MobileDetectorService } from '../../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TableFilterService } from '../../table-filter.service';
import { Event } from '../../entity/event/event.model';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

export interface EventData {
  name: string;
  address: string;
  distance: number;
  genderRatio: string;
  targetGroup: string;
  available: number;
  category: string;
  dateStart: string;
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

  /* Sorting */
  sortAscending = true;

  dataSource = new MatTableDataSource<EventData>();
  displayedColumns = ['name', 'address', 'category', 'distance', 'genderRatio', 'targetGroup', 'available', 'dateStart'];
  dataSourceMobile = new MatTableDataSource<EventDataMobile>();
  displayedColumnsMobile = ['name', 'address', 'available', 'dateStart'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  events = [];

  subscription: Subscription;
  filterValue: any;

  constructor(private efbs: EventFirebaseService,
    private mds: MobileDetectorService, private spinner: NgxSpinnerService,
    private tfs: TableFilterService, private router: Router,
    private toast: ToastrService) {
    let observer = this.efbs.getList().subscribe(eventSnapshots => {
      this.events = eventSnapshots;
      Object.keys(this.events).forEach((event: any) => {
        this.events[event] = { ...this.events[event], participantCount: Object.keys(this.events[event].participants).length };
        console.log(this.events[event]);
      });
      this.events.sort(this.compareToAscending);

      // this.events.splice(0, 1);
      if (this.events.length > 0) {
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.filterPredicate = this.customFilterPredicate();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.dataSourceMobile = new MatTableDataSource(this.events);
        this.dataSourceMobile.filterPredicate = this.customFilterPredicate();
        this.dataSourceMobile.paginator = this.paginator;
        this.dataSourceMobile.sort = this.sort;
        this.spinner.hide();
        // observer.unsubscribe();
      }
    }, (error) => {
      console.log("Something went wrong :(");
    });

    this.subscription = this.tfs.getEvent().subscribe(filter => { this.applyFilter(filter) });
  }

  ngOnInit() {
    this.spinner.show();
    this.isMobile = this.mds.check();
  }

  ngAfterViewInit() {
    this.dataSource.sortData = this.matCompareTo;
    setTimeout(() => {
      if (this.events.length < 1) {
        this.spinner.hide();
        this.toast.info("Der er ingen events oprettet", "Info");
      }
    }, 3000);
  }

  applyFilter(filterValue) {
    console.log("Apply filter says: ", filterValue);
    this.dataSource.filter = JSON.stringify(filterValue);
    // console.log(filterValue);
    // let obj = {category: strArr[1], genderRatio: strArr[2], targetGroup: strArr[3]};
    // console.log(obj);
    // this.dataSource.filter = JSON.stringify(obj);

    // let isAccepted = true;
    // if (strArr[0] !== "") {
    //   if ( Number(strArr[0]) < this.dataSource.) {
    //     isAccepted = false;
    //   }
    // }
    // if (strArr[1] !== "") {
    //   if ( strArr[1] !== dataSource.targetGroup) {
    //     isAccepted = false;
    //   }
    // }
    // if (strArr[2] !== "") {
    //   if ( strArr[2] !== dataSource.category) {
    //     isAccepted = false;
    //   }
    // }
    // if (strArr[3] !== "") {
    //   if ( strArr[3] !== dataSource.genderRatio) {
    //     isAccepted = false;
    //   }
    // }

    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // this.dataSourceMobile.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    //   this.dataSourceMobile.paginator.firstPage();
    // }
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

  matCompareTo(data: EventData[], sort: MatSort): EventData[] {
    return data.sort((a, b) => {
      let dateA = new Date(a.dateStart);
      let dateB = new Date(b.dateStart);
      if (dateA > dateB) {
        return 1;
      }
      if (dateA < dateB) {
        return -1;
      }
      return 0;
    });
  }

  compareToAscending(a, b): number {
    let dateA = new Date(a.dateStart);
    let dateB = new Date(b.dateStart);
    if (dateA > dateB) {
      return 1;
    }
    if (dateA < dateB) {
      return -1;
    }
    return 0;
  }

  compareToDescending(a, b): number {
    let dateA = new Date(a.dateStart);
    let dateB = new Date(b.dateStart);
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  }

  compareTo() {
    this.sortAscending = !this.sortAscending;
    this.toast.toastrConfig.timeOut = 2000;
    if (this.sortAscending) {
      // this.toast.info('Sorteret efter førstkommende events','Info');
      this.events.sort(this.compareToAscending);
      this.dataSource = new MatTableDataSource(this.events);
    } else {
      // this.toast.info('Sorteret efter senestkommende events','Info');
      this.events.sort(this.compareToDescending);
      this.dataSource = new MatTableDataSource(this.events);
    }
  }

  customFilterPredicate() {
    return function (data: EventData, filter: string): boolean {
      console.log("CustomFilterPredicate", filter);
      let searchString = JSON.parse(filter);
      console.log("Parsed", searchString);

      let isAccepted: boolean = true;

      console.log(data.targetGroup.trim() + " " + searchString.targetGroup);
      console.log(data.targetGroup.trim().indexOf(searchString.targetGroup));

      if (searchString.targetGroup !== undefined) {
        if (data.targetGroup.trim().indexOf(searchString.targetGroup) === -1) {
          isAccepted = false;
        }
      }

      if (searchString.genderRatio !== undefined) {
        if (data.genderRatio.trim().indexOf(searchString.genderRatio) === -1) {
          isAccepted = false;
        }
      }

      if (searchString.category !== undefined) {
        if (data.category.trim().indexOf(searchString.category) === -1) {
          isAccepted = false;
        }
      }

      console.log(isAccepted);

      return isAccepted;
    }
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
    return this.efbs.getList();
  }
  disconnect() { }
}

