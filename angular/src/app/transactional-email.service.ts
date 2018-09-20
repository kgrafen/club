import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class TransactionalEmailService {

  path = "/messages/";
  to = 'singlenetworktest@armyspy.com'

  constructor(private db: AngularFireDatabase, private http: Http) { }

  sendContactMail(formData) {
    let url = `https://your-cloud-function-url/sendContactMail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', this.to);
    params.set('from', formData.email);
    params.set('subject', formData.Subject);
    params.set('content', formData.message);

    return this.http.post(url, params)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }
}
