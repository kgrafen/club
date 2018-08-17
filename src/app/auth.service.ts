import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Routing
import { Router} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {};

  constructor(public afAuth: AngularFireAuth, private router: Router) {

   }

  doRegister(formData){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogin(formData) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(credential => {
        console.log("Welcome back");
        this.loginRedirect();
        return credential.user;
      })
      .catch(error => console.log(error));
  }

  doSignout() {
    console.log("Signing out");
    this.afAuth.auth.signOut().then(() => {
      this.signoutRedirect();
    });
  }

  loginRedirect() {
    this.router.navigate(['/loggedin-dashboard']);
  }

  signoutRedirect() {
    this.router.navigate(['/']);
  }
  
}
