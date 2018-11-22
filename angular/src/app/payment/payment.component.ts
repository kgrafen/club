import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserFirebaseService } from '../user-firebase.service';
import { AuthService } from '../auth.service';

export interface Item {
  name: string;
  price: number;
  type: string;
}

const ITEM_DATA: Item[] = [
  {name: '1 måneds medlemsskab', price: 60, type: "engangsbeløb"},
  {name: 'Månedlig abonnement', price: 50, type: "månedlig subskription"},
]

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
  idx = -1;

  displayedColumns: string[] = ['name', 'price', 'type'];
  dataSource = ITEM_DATA;

  constructor(private _formBuilder: FormBuilder, private ufbs: UserFirebaseService,
    private authService: AuthService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      type: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      card: ['', Validators.required]
    });
    let observer = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( (snapshot:any) => {
      this.thirdFormGroup = this._formBuilder.group({
        username: snapshot.username,
        email: snapshot.email,
        date: ['', Validators.required]
      });
      observer.unsubscribe();
    });

    console.log(this.dataSource[0].price);
  }

  selectionFormValue(s) {
    this.selection = s;
    if (s === 'Månedlig Abonnement') {
      this.idx = 1;
    } else if (s === '1 Måneds Medlemsskab') {
      this.idx = 0;
    }
  }

  cardFormValue(c) {
    this.card = c;
  }

}
