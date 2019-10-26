import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from '../../node_modules/rxjs';
import { AngularFireDatabase, AngularFireList  } from '../../node_modules/@angular/fire/database';
import { Role } from './entity/user/role.model';


@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  dbPath: string = '/user-roles/';

  userTypes = {
    ADMIN: "admin",
    MEMBER: "member",
    MODERATOR: "moderator"
  }

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  getList(): Observable<any[]> {
    return this.db.list(this.dbPath).snapshotChanges();
  }

  insertRole(obj) {
    this.db.list(this.dbPath).push(obj);
  }

  updateRole(obj, id: string) {
    this.db.object(this.dbPath + id).update(obj);
  }

  flushSetup() {
    this.insertRole({fk_id: "3BB4t1qL0mh0c55LfiTy55kdLhK2", type: "admin"});
    this.insertRole({fk_id: "XxftCOedzEYwLBbcYkyTw1K4nts1", type: "admin"});
    this.insertRole({fk_id: "yI9xT7NCsZh3pTS1DxBb8fvoXz62", type: "admin"});
    this.insertRole({fk_id: "baKzGAMnzJPQ9EzJ73RrvG0iGR33", type: "member"});
  }

}
