import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.isMobile = true;
    } 
  }

}
