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

  public storyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    story: new FormControl('')
});

public proposalForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    details: new FormControl('')
});

  constructor(private mds: MobileDetectorService) { }

  ngOnInit() {
    this.isMobile = this.mds.check();
  }

}
