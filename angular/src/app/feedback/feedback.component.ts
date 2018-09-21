import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MobileDetectorService } from '../mobile-detector.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isMobile = false;
  isProposal = false;
  btnText = "Del min historie";

public feedbackForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl(''),
    subject: new FormControl(''),
    details: new FormControl('')
});

  constructor(private mds: MobileDetectorService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
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

}
