import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit {

  public slider1Val: Number = 10;

  constructor() { }

  ngOnInit() {
  }

}
