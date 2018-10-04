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
  isLoggedOn = false;
  username: string;

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

  constructor(private authService: AuthService, public dialog: MatDialog, 
    private mds: MobileDetectorService, private spinner: NgxSpinnerService, 
    private ufbs: UserFirebaseService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedOn = true;
        //First sign in AKA account creation
        this.ufbs.getUserByID(user.uid).subscribe(value => {
          if (value === null) {
            this.authService.doSocialLoginRegister(user);
          } else {
            this.ufbs.getUserByID(user.uid).subscribe(value => {
              // This error lies.
              let obj = JSON.parse(JSON.stringify(value));
              let u: User = Object.assign(obj, User);
              this.ufbs.setStorage(u);
              this.username = u._username;
            })
          }
        })
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

