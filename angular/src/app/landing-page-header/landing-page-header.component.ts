import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MobileLoginHeaderComponent } from '../mobile-login-header/mobile-login-header.component';
import { MobileDetectorService } from '../mobile-detector.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TwitterAuthProvider_Instance } from '@firebase/auth-types';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';

@Component({
  selector: 'landing-page-header',
  templateUrl: './landing-page-header.component.html',
  styleUrls: ['./landing-page-header.component.css']
})
export class LandingPageHeaderComponent implements OnInit {

  isMobile = false;
  hide: true;

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor(private authService: AuthService, public dialog: MatDialog, 
    private mds: MobileDetectorService, private spinner: NgxSpinnerService, 
    private ufbs: UserFirebaseService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();

    //Login validation
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        //First sign in AKA account creation
        if (this.ufbs.getUserByEmail(user.email) === undefined) {
          this.authService.doSocialLoginRegister(user);
        }
        //Nth signin, not first time.
        this.ufbs.getUserByEmail(user.email);
        this.authService.loginRedirect();
      }
    });
  }

  tryLogin(formData) {
    this.spinner.show();
    this.authService.doLogin(formData);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
  }, 2000);
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin();
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MobileLoginHeaderComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}

