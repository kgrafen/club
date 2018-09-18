import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

// Entity
import { User } from './entity/user/user';
import { Payment } from './entity/payment/payment.model';

// Helper classes
import { JsonConverter } from './entity/helper/json-converter';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  paymentsObservable: Observable<any[]>;
  dbPath: string = "/payments";
  jsonConverter: JsonConverter = new JsonConverter();

  getPayments() {
    this.paymentsObservable = this.getList(this.dbPath);
  }

  getList(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getPaymentByUsername(username: string) {
    this.db.list(this.dbPath, ref => ref.orderByChild('user').equalTo(username));
  }

  insertPayment(payment: Payment) {
    const entry = this.objToJSON(payment);
    const usersRef = this.db.list(this.dbPath).push(entry);
  }

  objToJSON(paymentObject : Payment): string {
    return JSON.parse(JSON.stringify(paymentObject));
  }

  jsonToObj(json: string) : Payment {
    let obj : Payment = this.jsonConverter.convertJsonToPaymentObj(json);
    return obj;
  }

}
