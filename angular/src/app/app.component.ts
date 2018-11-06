import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private location: Location){
    location.subscribe( (callback) => {
      console.log(callback);
    });
  }

  ngOnInit() {
    
  }

}
