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
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
    private ufbs: UserFirebaseService, private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedOn = true;
        //First sign in AKA account creation
        this.ufbs.getUserByID(user.uid).subscribe(value => {
          if (value === null) {
            this.authService.doSocialLoginRegister(user);
            this.showSuccess("Du er nu oprettet & logget ind 👍" , "Success!");
          } else {
            this.ufbs.getUserByID(user.uid).subscribe(value => {
              let u: User = new User(value);
              this.ufbs.setStorage(u);
              this.username = u.username;
              
              if (this.router.url === "/landing-page") {
                this.showSuccess("Velkommen tilbage 🙂", this.ufbs.getStorage().username); 
              }
              
            });
          }
          this.spinner.hide();
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
    this.spinner.show();
    this.authService.doFacebookLogin().then( (callback) => {
      this.spinner.hide();
      console.log(callback);
      const code: string = callback.code;
      console.log(code);
      if (code.includes('account-exists-with-different-credential')) {
        this.toastr.error(this.translateCallback(callback.message), "Fejl");
      } else {
        this.toastr.success(callback.message, "Success");
      }
    });
  }

  tryGoogleLogin() {
    this.spinner.show();
    this.authService.doGoogleLogin();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MobileLoginHeaderComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  showSuccess(msg = "", status = "") {
    this.toastr.clear();
    this.toastr.success(msg, status);
  }

  translateCallback(message: string) {
    if (message.includes('An account already exists')) {
      return "En konto findes allerede oprettet med den samme email addresse. Dette skyldes at du allerede har en Google konto eller Facebook konto tilknyttet SingleNetværket. Log derfor ind med den anden.";
    }
  }

}

