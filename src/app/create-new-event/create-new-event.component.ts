import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { $ } from 'protractor';
import { Event } from '../entity/event/event.model';
import { EventAddress } from '../entity/helper/EventAddress';
import { EventFirebaseService } from '../event-firebase.service';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';

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

  constructor(private efbs: EventFirebaseService, private authService: AuthService, 
  private ufbs: UserFirebaseService) { }

  ngOnInit() {
    
  }

  onSubmitEvent(value) {
    let e: Event = this.formDataToModel(value);
    this.efbs.insertEvent(e);
  } 

  formDataToModel(formData): Event {
    const event = new Event();
    event.address = new EventAddress(formData.eventLocationStreet, 
      formData.eventLocationCity, formData.eventLocationZip);
    event.category = formData.eventCategory;
    event.dateStart = formData.eventDate;
    event.deadlineDate = formData.eventDeadlineDate;
    event.deadlineTime = formData.eventDeadlineTime;
    event.description = formData.description;
    event.file = formData.file;
    event.genderRatio = formData.genderRatio;
    event.hostRating = formData.hostRating;
    event.maxAge = formData.eventMaxAge;
    event.minAge = formData.eventMinAge;
    event.maxGuests = formData.maxGuests;
    event.minGuests = formData.minGuests;
    event.name = formData.eventName;
    event.paymentDate = formData.eventPaymentDate;
    event.paymentDue = formData.eventPaymentDue;
    event.paymentOption = formData.paymentOption;
    event.price = formData.price;
    event.queue = formData.eventQueue;
    event.targetGroup = formData.targetGroup;
    event.timeEnd = formData.eventEndTime;
    event.timeStart = formData.eventStartTime;
    event.$key = this.efbs.generateNewHashKey(this.ufbs.convertEmailToKey(this.authService.user.email), event.name);
    return event;
  }

}
