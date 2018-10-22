import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserFirebaseService } from '../user-firebase.service';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { UserRoleService } from '../user-role.service';
import { Role } from '../entity/user/role.model';
import { Router } from '@angular/router';
import { TransactionalEmailService } from '../transactional-email.service';

@Component({
  selector: 'admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.css']
})
export class AdminNewsletterComponent implements OnInit {

  isLoggedOn = false;

  public newsletterForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    targetGroup: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl('')
});

  constructor(private ufbs: UserFirebaseService, private tes: TransactionalEmailService) { }

  ngOnInit() {
    
  }

  sendNewsletter(formData) {
    
  }

}
