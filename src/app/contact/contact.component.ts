import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MobileDetectorService } from '../mobile-detector.service';
import { TransactionalEmailService } from '../transactional-email.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isMobile = false;

  public contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
});

  constructor(private mds: MobileDetectorService, private tes: TransactionalEmailService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

  sendMail(formData) {
    this.tes.sendContactMail(formData);
  }

}
