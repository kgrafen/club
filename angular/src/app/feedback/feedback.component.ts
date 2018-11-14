import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MobileDetectorService } from '../mobile-detector.service';
import { AuthService } from '../auth.service';
import { TransactionalEmailService } from '../transactional-email.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isMobile = false;
  isProposal = false;
  btnText = "Del min historie";
  displayNavbar = false;
  isSendingMsg = false;

public feedbackForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl(''),
    subject: new FormControl(''),
    details: new FormControl('')
});

  constructor(private mds: MobileDetectorService, private authService: AuthService,
    private tes: TransactionalEmailService, private toast: ToastrService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
    this.authService.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.displayNavbar = true;
      }
    });
  }

  onItemChange(value) {
    if(value === "Forslag") {
      this.btnText = "Foreslå";
      this.isProposal = true;
    } else {
      this.btnText = "Den min historie";
      this.isProposal = false;
    }
  }

  send(formValue) {
    this.toast.info('Afventer svar fra server','⌛️')
    this.isSendingMsg = true;
    this.tes.sendContactMail(formValue).subscribe( () => {
      if (formValue.type === "Del din historie") {
        this.toast.success('Tak for at du har delt din historie.','👍  ');
      } else {
        this.toast.success('Tak for din feedback.', '👍  ');
      }
    });
  }

}
