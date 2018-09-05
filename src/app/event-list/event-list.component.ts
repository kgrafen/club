import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { EventFirebaseService } from '../event-firebase.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventsObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private efbs: EventFirebaseService) { }

  ngOnInit() {
    this.efbs.getEvents();
    this.eventsObservable = this.efbs.eventsObservable;
  }

}
