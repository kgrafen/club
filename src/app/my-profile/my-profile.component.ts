import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public isMobile: boolean = false;

  constructor() { }

  ngOnInit() {

    if (window.screen.width <= 600) {
      this.isMobile = true;
    }

  }

}
