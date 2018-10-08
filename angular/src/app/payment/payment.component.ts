import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserFirebaseService } from '../user-firebase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  selectOptions = ['Månedlig Abonnement', '1 Måneds Medlemsskab'];
  cardOptions = ['Visa/Dankort', 'Mastercard'];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  title = "Betaling";
  selection = "";
  card = "";
  checked = false;

  constructor(private _formBuilder: FormBuilder, private ufbs: UserFirebaseService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      type: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      card: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      username: this.ufbs.getStorage().username,
      email: this.ufbs.getStorage().email,
      date: ['', Validators.required]
    });
  }

  selectionFormValue(s) {
    this.selection = s;
  }

  cardFormValue(c) {
    this.card = c;
  }

}
