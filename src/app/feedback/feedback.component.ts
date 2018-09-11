import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
