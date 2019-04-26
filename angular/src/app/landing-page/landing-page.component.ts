import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import { MobileDetectorService } from '../mobile-detector.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isMobile: boolean = false;

  constructor(private spinner: NgxSpinnerService, 
    private authService: AuthService, 
    private ufbs: UserFirebaseService,
    private mds: MobileDetectorService, 
    ) { }

  ngOnChanges() {
  
  }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

  onLoading() {
    this.spinner.show();
  }

  onLoaded() {
    this.spinner.hide();
  }

}
