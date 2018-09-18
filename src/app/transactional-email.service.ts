import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

@Injectable({
  providedIn: 'root'
})
export class TransactionalEmailService {

  path = "/messages/";

  constructor(private db: AngularFireDatabase) { }

  sendContactMail(formGroup) {
    const appendPath = 'contact';
    console.log(formGroup);
    const {email, message, name, subject} = formGroup;
    const date = Date();
    const html = `
    <div>From: ${name}</div>
    <div>Email: <a href="mailto:${email}">${email}</a></div>
    <div>Date: ${date}</div>
    <div>Message: ${message}</div>
    `;

    let formRequest = {name, email, subject, message, date ,html};

    this.db.list(this.path + appendPath).push(formRequest);
    console.log("Service is done handling contact mail");
  }

}
