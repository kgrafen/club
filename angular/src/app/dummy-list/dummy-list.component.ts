import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireDatabase } from '@angular/fire/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrls: ['./dummy-list.component.css']
})
export class DummyListComponent implements OnInit {
  eventsObservable: Observable<any[]>;
  events: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.eventsObservable = this.getDummy('/events');
  }

  getDummy(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
