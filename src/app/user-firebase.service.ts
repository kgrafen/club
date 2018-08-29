import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/angularfire2/database';
import { Time } from '@angular/common';
import { timestamp } from 'rxjs/internal/operators/timestamp';

// Entity
import { User } from './entity/user/user';

// Helper classes
import { JsonConverter } from './entity/helper/json-converter';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {

  dbPath: string = '/users';
  user: User;

  usersObservable: Observable<any[]>;

  jsonConverter: JsonConverter = new JsonConverter();

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  // CRUD

  getUsers() {
    this.usersObservable = this.getList(this.dbPath);
  }

  getList(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getUserByEmail(email: string) {
    let path = this.dbPath+"/"+this.convertEmailToKey(email);
    this.db.object(path).valueChanges().subscribe(data => {
      this.user = this.jsonToObj(JSON.stringify(data));
    });
  }

  insertUser(user: User) {
    let entry = this.objToJSON(user);
    const usersRef = this.db.list(this.dbPath);
    this.db.object(this.dbPath+"/"+this.convertEmailToKey(user.email)).update(entry);
   }
 
   updateUser(key: string, user: User) {
    let entry = this.objToJSON(user);
    const usersRef = this.db.list(this.dbPath);
    usersRef.set('key', entry);
   }
 
   deleteuser(key: string) {
     const usersRef = this.db.list(this.dbPath);
     usersRef.remove(key);
   }

   objToJSON(userObject : User): string {
     return JSON.parse(JSON.stringify(userObject));
   }

   jsonToObj(json: string) : User {
     let obj : User = this.jsonConverter.convertJsonToUserObj(json);
     return obj;
   }

   convertEmailToKey(email: string) : string {
    return email.replace('.', '¤');
   }

   convertKeyToEmail(key: string) {
    return key.replace('¤','.');
   }

}
