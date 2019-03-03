import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, 
    private authService: AuthService, 
    private ufbs: UserFirebaseService,
  ) { }

  ngOnChanges() {
  
  }

  ngOnInit() {

  }

  onLoading() {
    this.spinner.show();
  }

  onLoaded() {
    this.spinner.hide();
  }

}
