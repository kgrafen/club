import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

// Routing
import { Router} from '@angular/router';

// Session storage
import { SessionStorage, SessionStorageService } from 'angular-web-storage'
import { UserFirebaseService } from './user-firebase.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from './entity/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: firebase.User;
  //public userInfo: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router, 
    private session: SessionStorageService, private ufbs: UserFirebaseService, 
    private spinner: NgxSpinnerService) {
      // To apply the default browser preference instead of explicitly setting it.
      // firebase.auth().useDeviceLanguage();
      
      //this.userInfo = this.afAuth.authState;
   }

  doRegister(formData){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
      .then(res => {
        resolve(res);
        const user = new User(formData.username, formData.email);
        const date = new Date();
        date.setUTCFullYear(2019, 0, 1);
        user.subscribed_until = date;
        this.ufbs.insertUser(user, res.uid);
        this.doLogin({email: formData.email, password: formData.password});
      }, err => reject(err))
    })
  }

  doLogin(formData) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(credential => {
        this.user = this.afAuth.auth.currentUser;
        //this.loginRedirect();
        return credential.user;
      })
      .catch(error => console.log(error));
  }


  doSocialLoginRegister(firebaseUser: firebase.User) {
    const userEntity = new User(firebaseUser.displayName, firebaseUser.email);
    const date = new Date();
    date.setUTCFullYear(2019, 0, 1);
    userEntity.subscribed_until = date;
    this.ufbs.insertUser(userEntity, firebaseUser.uid);
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.useDeviceLanguage();
    return this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  doFacebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.afAuth.auth.useDeviceLanguage();
    return this.afAuth.auth.signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  doSignout() {
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

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 28; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
}
