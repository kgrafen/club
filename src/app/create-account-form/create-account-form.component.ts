import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MobileLoginHeaderComponent } from '../mobile-login-header/mobile-login-header.component';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  isMobile = false;
  hide = true;
  displayMessage = false;

  public errorMessage : string;
  public successMessage : string;

  public registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl('')
  });

  constructor(private authService: AuthService, private ufbs: UserFirebaseService, 
    public dialog: MatDialog) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.isMobile = true;
    }
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      this.ufbs.insertUser(new User(value.username, value.email));
      this.errorMessage = "";
      this.successMessage = "Din nye profil er blevet oprettet!";
      this.displayMessage = true;
    }, err => {
      console.log(err);
      this.errorMessage = this.translateErrorMsg(err);
      this.successMessage = "";
      this.displayMessage = true;
    })
  }

  translateErrorMsg(err) : string {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(MobileLoginHeaderComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + result);
    });
  }

}
