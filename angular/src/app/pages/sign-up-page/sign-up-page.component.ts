import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from 'src/app/mobile-detector.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  isMobile: boolean = false;

  constructor(
    private mds: MobileDetectorService, 
  ) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

}
