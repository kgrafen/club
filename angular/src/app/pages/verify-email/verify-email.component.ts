import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  emailVerificationCode: string;
  user;
  hintsShown: boolean;
  isVerifying: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      
      if (params['oobCode'] != undefined) {
        this.isVerifying = true;
        this.emailVerificationCode = params['oobCode'];
      }
    });
  }

  ngOnInit() {
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user !== null) {
        this.user = user;
        if (user.emailVerified) {
          this.router.navigate(['/events']);
        }
      } else {
        this.router.navigate(['/']);
      }
    });

    this.authService.afAuth.auth.checkActionCode(this.emailVerificationCode).then(
      (user) => {
        
        firebase.auth().applyActionCode(this.emailVerificationCode).then(
          () => {
            let ref = firebase.database().ref('verifiedEmails/' + user.data.email.replace('.', '*'));
            ref.set(true).then(
              () => {
                
                this.router.navigate(['/my-profile']);
              }
            ).catch(
              (error) => {
                
              }
            )
          }
        ).catch(
          (error) => {
            
          }
        )
      }
    )
  }

  resendVerificationEmail() {
    this.authService.sendVerificationMail();
    this.hintsShown = false;
  }

  redirectToContactPage() {
    this.router.navigate(['contact']);
  }
}
