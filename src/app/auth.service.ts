import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Routing
import { Router} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventFilterComponent } from './event-filter/event-filter.component';
import { Observable } from 'rxjs';

// Session storage
import { SessionStorage, SessionStorageService } from 'angular-web-storage'
import { UserFirebaseService } from './user-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: firebase.User;

  constructor(public afAuth: AngularFireAuth, private router: Router, 
    private session: SessionStorageService, private ufbs: UserFirebaseService ) {

   }

  doRegister(formData){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        resolve(res);
        this.doLogin({email: formData.email, password: formData.password});
      }, err => reject(err))
    })
  }

  doLogin(formData) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(credential => {
        this.user = this.afAuth.auth.currentUser;
        this.ufbs.getUserByEmail(this.user.email);
        this.loginRedirect();
        return credential.user;
      })
      .catch(error => console.log(error));
  }

  doSignout() {
    console.log("Signing out");
    this.afAuth.auth.signOut().then(() => {
      this.user = null;
      this.signoutRedirect();
      this.session.remove("user");
    });
  }

  loginRedirect() {
    this.router.navigate(['/loggedin-dashboard']);
  }

  signoutRedirect() {
    this.router.navigate(['/']);
  }
  
}
