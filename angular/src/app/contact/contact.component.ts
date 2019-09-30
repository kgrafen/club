import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MobileDetectorService } from '../mobile-detector.service';
import { TransactionalEmailService } from '../transactional-email.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isMobile = false;
  disabled = false;

  public contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
});

  constructor(private mds: MobileDetectorService, private tes: TransactionalEmailService,
    private toast: ToastrService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

  sendMail(formData) {
    this.disabled = true;
    this.toast.info("Svar fra server...", "Afventer");
    let observer = this.tes.test().subscribe(response => {
      this.toast.clear();
      this.toast.success('Din besked er afsendt','👍');
      this.disabled = false;
      observer.unsubscribe();
    });
    // let observer = this.tes.sendContactMail(formData).subscribe(response => {
    //   this.toast.clear();
    //   this.toast.success("Din besked er afsendt!", '👍');
    //   
    //   
    //   this.disabled = false;
    //   observer.unsubscribe();
    // });
  }

}
