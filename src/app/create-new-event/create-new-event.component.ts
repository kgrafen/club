import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { Event } from '../entity/event/event.model';
import { EventAddress } from '../entity/helper/EventAddress';
import { EventFirebaseService } from '../event-firebase.service';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})
export class CreateNewEventComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  isPaymentDeadlineDate = false;

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
              private ufbs: UserFirebaseService, 
              public dialogRef: MatDialogRef<CreateNewEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required],
      eventLocationStreet: ['', Validators.required],
      eventLocationCity: ['', Validators.required],
      eventLocationZip: ['', Validators.required],
      eventCategory: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      eventTargetGroup: ['', Validators.required],
      eventMinAge: ['', Validators.required],
      eventMaxAge: ['', Validators.required],
      eventMinGuests: ['', Validators.required],
      eventMaxGuests: ['', Validators.required],
      eventGender: ['', Validators.required],
      eventQueue: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      eventDate: ['', Validators.required],
      eventStartTime: ['', Validators.required],
      eventEndTime: ['', Validators.required],
      eventDeadlineDate: ['', Validators.required],
      eventDeadlineTime: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      eventPrice: ['', Validators.required],
      eventPaymentOption: ['', Validators.required],
      eventPaymentDue: ['', Validators.required],
      eventPaymentDate: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      eventFile: ['', Validators.required],
    });
  }

  onItemChange(value) {
    if(value === "Dato") {
      this.isPaymentDeadlineDate = true;
    } else {
      this.isPaymentDeadlineDate = false;
    }
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

  onNoClick(): void {
    this.dialogRef.close();
  }

}
