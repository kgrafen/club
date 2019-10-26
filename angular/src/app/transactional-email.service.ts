import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList  } from '../../node_modules/@angular/fire/database';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionalEmailService {

  path = "/messages/";
  to = 'SpicyMexican@superrito.com'

  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) { }

  sendContactMail(formData) {
    let obj = {from: formData.email, name: formData.name, subject: formData.subject, mailText: formData.message}
    return this.httpClient.post("https://us-central1-single-network.cloudfunctions.net/sendContactMail", obj, { responseType: 'text'})
  }

  sendNewsletter(formData) {
    let data = JSON.stringify ( {username: formData.username, subject: formData.subject, mailMsg: formData.text} );
    return this.httpClient.post("https://us-central1-single-network.cloudfunctions.net/sendNewsletter", data, {responseType: 'text'});
  }

  sendFeedback(formData) {
    let obj = {from: formData.email, name: formData.name, subject: formData.subject + " - " + formData.type, mailText: formData.details}
    return this.httpClient.post("https://us-central1-single-network.cloudfunctions.net/sendContactMail", obj, { responseType: 'text'});
  }

  test() {
    return this.httpClient.get("https://us-central1-single-network.cloudfunctions.net/pingTest", { responseType: 'text'});
    // return this.httpClient.get("httpClients://us-central1-single-network.cloudfunctions.net/sendContactMail");
  }

}
