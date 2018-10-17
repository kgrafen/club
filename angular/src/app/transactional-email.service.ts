import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

import { Headers, Response, URLSearchParams, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionalEmailService {

  path = "/messages/";
  to = 'SpicyMexican@superrito.com'

  constructor(private db: AngularFireDatabase, private http: Http) { }

  helloWorld() {
    return this.http.get("https://us-central1-single-network.cloudfunctions.net/helloWorld");
  }

  pingPongObj(obj) {
    return this.http.post("https://us-central1-single-network.cloudfunctions.net/pingPongObj", obj);
  }

}
