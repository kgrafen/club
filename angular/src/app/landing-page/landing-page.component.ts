import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'angular2-cookie';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html?v=${new Date().getTime()}',
  styleUrls: ['./landing-page.component.css?v=${new Date().getTime()}']
})
export class LandingPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private cs: CookieService, 
    private authService: AuthService, private ufbs: UserFirebaseService) { }

  ngOnChanges() {
  
  }

  ngOnInit() {
    this.clearCache();
    //Login validation
  }

  onLoading() {
    this.spinner.show();
  }

  onLoaded() {
    this.spinner.hide();
  }

  clearCache() {
    let millis = Number( Date.now().toString()) / 1000;

    if ( this.cs.get('last_visit') != undefined ) {
      let dateStr = this.cs.get('last_visit');
      let thenMillis = Number(dateStr);

      if (thenMillis + 86400 <= millis) {
        this.cs.put('last_visit', millis + "");
        location.reload(true);
      }
      
    } else {
      this.cs.put('last_visit', millis + "");
    }
  }


}
