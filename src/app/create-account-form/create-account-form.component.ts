import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  public errorMessage : string;
  public successMessage : string;

  public registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl('')
  });

  constructor(private authService: AuthService, private ufbs: UserFirebaseService) { }

  ngOnInit() {
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.ufbs.insertUser(new User(value.username, value.email));
      this.errorMessage = "";
      this.successMessage = "Din nye profil er blevet oprettet!";
    }, err => {
      console.log(err);
      this.errorMessage = this.translateErrorMsg(err);
      this.successMessage = "";
    })
  }

/*
  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Du er nu logget ind";
    }, err => {
      console.log(err);
      this.errorMessage = err;
      this.successMessage = "";
    })
  }
*/

  translateErrorMsg(err) : string {
    console.log(err.code);
    switch(err.code) {
      case "auth/invalid-email":
        return "Ugyldige tegn i email feltet eller tjek om feltet er tomt.";
      case "auth/email-already-in-use":
        return "Email adressen er allerede taget. Prøv en anden mail";
      case "auth/weak-password":
        return "Kodeordet skal mindst være 6 tegn.";
      default:
        return "Der skete en ukendt fejl prøv igen senere";
    }
    
  }

}
