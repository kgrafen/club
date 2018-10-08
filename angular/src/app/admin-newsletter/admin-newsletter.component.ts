import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.css']
})
export class AdminNewsletterComponent implements OnInit {

  public newsletterForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    targetGroup: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl('')
});

  constructor() { }

  ngOnInit() {
  }

}
