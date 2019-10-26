import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EventData, EventDataMobile } from '../my-events/my-events.component';
import { EventFirebaseService } from '../event-firebase.service';
import { MobileDetectorService } from '../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationExtras } from '@angular/router';
import { TableFilterService } from '../table-filter.service';
import { ToastrService } from 'ngx-toastr';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { DataSource } from '@angular/cdk/table';
import { Observable, Subscription  } from '../../../node_modules/rxjs';
import { Event } from '../entity/event/event.model';

@Component({
  selector: 'app-attended-events',
  templateUrl: './attended-events.component.html',
  styleUrls: ['./attended-events.component.css']
})
export class AttendedEventsComponent implements OnInit {

  isMobile = false;

  dataSource = new MatTableDataSource<EventData>();
  displayedColumns = ['name', 'address', 'category', 'distance', 'genderRatio', 'targetGroup', 'available', 'dateStart'];
  dataSourceMobile = new MatTableDataSource<EventDataMobile>();
  displayedColumnsMobile = ['name', 'address', 'available', 'dateStart'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  events = [];

  constructor(private efbs: EventFirebaseService, private ufbs: UserFirebaseService,
    private mds: MobileDetectorService, private spinner: NgxSpinnerService, 
    private tfs: TableFilterService, private router: Router, 
    private toast: ToastrService, private authService: AuthService) {
      this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( userSnapshot => {
        const u = new User(userSnapshot);
        this.efbs.getList().subscribe( eventSnapshots => {
          eventSnapshots.forEach( (eventSnapshot: any) => {
            if (eventSnapshot.participants !== undefined) {
              Object.values(eventSnapshot.participants).forEach( (value:any) => {
                if (value.username === u.username) {
                  if (new Date(eventSnapshot.dateStart) < new Date() ) {
                    this.events.push(eventSnapshot);
                    Object.keys(this.events).forEach( (event:any) => {
                      this.events[event] = {...this.events[event], participantCount: Object.keys(this.events[event].participants).length};
                      
                    });
                  }
                }
              });
            }
          });
          this.dataSource = new MatTableDataSource(this.events);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          this.dataSourceMobile = new MatTableDataSource(this.events);
          this.dataSourceMobile.paginator = this.paginator;
          this.dataSourceMobile.sort = this.sort;

          this.spinner.hide();
        });
      });
     }

  ngOnInit() {
    this.spinner.show();
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
    return this.efbs.getList();
  }
  disconnect() {}
}
