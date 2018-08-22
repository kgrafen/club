import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';


@Component({
  selector: 'create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent implements OnInit {

  public eventForm = new FormGroup({
    eventName: new FormControl(''),
    eventDescription: new FormControl(''),
    eventDate: new FormControl(''),
    eventStartTime: new FormControl(''),
    eventEndTime: new FormControl(''),
    eventCategory: new FormControl(''),
    eventTargetGroup: new FormControl(''),
    eventMinAge: new FormControl(''),
    eventMaxAge: new FormControl(''),
    eventFile: new FormControl(''),
    eventHostRating: new FormControl(''),
    eventMinGuests: new FormControl(''),
    eventMaxGuests: new FormControl(''),
    eventGender: new FormControl(''),
    eventQueue: new FormControl(''),
    eventLocationStreet: new FormControl(''),
    eventLocationCity: new FormControl(''),
    eventLocationZip: new FormControl(''),
    eventDeadlineDate: new FormControl(''),
    eventDeadlineTime: new FormControl(''),
    eventPrice: new FormControl(''),
    eventPaymentOption: new FormControl(''),
    eventPaymentDue: new FormControl(''),
    eventPaymentDate: new FormControl(''),

});

  constructor() { }

  ngOnInit() {
  }

  onSubmitEvent(value) {
    console.log(value);
    
  } 

}
