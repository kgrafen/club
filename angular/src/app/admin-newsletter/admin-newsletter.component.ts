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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.css']
})
export class AdminNewsletterComponent implements OnInit {

  isLoggedOn = false;
  disabled = false;

  public newsletterForm = new FormGroup({
    username: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl('')
});

  constructor(private ufbs: UserFirebaseService, private tes: TransactionalEmailService, 
    private ts: ToastrService) { }

  ngOnInit() {
    
  }

  sendNewsletter(formData) {
    this.disabled = true;
    this.ts.info("OK fra server...", "Afventer");

    this.tes.sendNewsletter(formData).subscribe(response => {
      console.log(response);
      this.ts.show("Din besked er nu afsendt!", "Success");
      this.disabled = false;
    }).unsubscribe;

  }

}
