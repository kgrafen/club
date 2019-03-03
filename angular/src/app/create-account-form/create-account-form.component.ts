import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import { UserFirebaseService } from '../user-firebase.service';
import { User } from '../entity/user/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MobileLoginHeaderComponent } from '../mobile-login-header/mobile-login-header.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TranslateHelperService } from '../services/translate.service';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  isMobile = false;
  hide = true;
  displayMessage = false;
  passwordsMatch = false;

  public errorMessage;
  public successMessage : string;

  public registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      username: new FormControl('')
  });

  constructor(
    private authService: AuthService, 
    private ufbs: UserFirebaseService, 
    public dialog: MatDialog, private spinner: NgxSpinnerService, 
    private toast: ToastrService,
    private translate: TranslateHelperService,
    ) { }

  ngOnInit() {
    if (window.screen.width <= 600) {
      this.isMobile = true;
    }
  }

  tryRegister(value){
        console.log('form value', value);
        if (this.formValidation()) {
        this.spinner.show();
        this.authService.doRegister(value)
        .then(res => {
        this.spinner.hide();
        this.authService.sendVerificationMail();
    }, err => {
        console.log('er', err);
        this.errorMessage = this.translate.translateFirebaseErrorMessage(err.code);
        this.displayMessage = true;
        this.spinner.hide();
    })
    }
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
      
    });
  }

  comparePasswords(eventTargetValue: string) {
    this.toast.clear();
    if (eventTargetValue.length > 7) {
      
      if (eventTargetValue !== this.registerForm.get('password').value) {
        this.toast.warning('Password er ikke ens', 'Hov!');
        this.passwordsMatch = false;
      } else {
        this.passwordsMatch = true;
      }
    } 
  }

  formValidation(): boolean {
    // TODO: implement this method
    return true;
  }

}
