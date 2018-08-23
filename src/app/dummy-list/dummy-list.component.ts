import { Component, OnInit } from '@angular/core';
// Firebase
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrls: ['./dummy-list.component.css']
})
export class DummyListComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  events: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getDummy('/events');
  }

  getDummy(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
