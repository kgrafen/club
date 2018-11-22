import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableFilterService {

  private subject = new Subject<any>();

  distance: string;
  children: string;
  gender: string;
  category: string;

  constructor() { }

  onDistanceChange(distance: Number) {
   this.distance = distance.toString();
   this.sendEvent(this.distance);
  }

  onChildrenChange(children: string) {
    this.children = children;
    this.sendEvent(this.children);
  }

  onGenderChange(gender: string) {
    this.gender = gender;
    this.sendEvent(this.gender);
  }

  onCategoryChange(category: string) {
    this.category = category;
    this.sendEvent(this.category);
  }

  sendEvent(value) {
    this.subject.next(value);
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  clearFilters() {
    this.category = "";
    this.gender = "";
    this.children = "";
    this.distance = "";
    this.sendEvent("");
  }

}
