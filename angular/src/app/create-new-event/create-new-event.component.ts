import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { $ } from 'protractor';
import { Event } from '../entity/event/event.model';
import { EventAddress } from '../entity/helper/EventAddress';
import { EventFirebaseService } from '../event-firebase.service';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GeoCodingApiService } from '../geo-coding-api.service';
import { Observable } from 'rxjs';

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

  apiZipValue = "By";
  lookupCity;
  

  constructor(private efbs: EventFirebaseService, private authService: AuthService, 
              private ufbs: UserFirebaseService, 
              public dialogRef: MatDialogRef<CreateNewEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _formBuilder: FormBuilder, private geoAPI: GeoCodingApiService) { }

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

  onSubmitEvent() {
    let e: Event = this.formDataToModel();
    this.efbs.insertEvent(e);
  } 

  formDataToModel(): Event {
    const event = new Event();

    event.name = this.firstFormGroup.value.eventName;
    event.address = new EventAddress(this.firstFormGroup.value.eventLocationStreet, 
      this.apiZipValue, this.firstFormGroup.value.eventLocationZip);
    event.category = this.firstFormGroup.value.eventCategory;
    event.description = this.firstFormGroup.value.eventDescription;

    event.dateStart = this.thirdFormGroup.value.eventDate;
    event.deadlineDate = this.thirdFormGroup.value.eventDeadlineDate;
    event.deadlineTime = this.thirdFormGroup.value.eventDeadlineTime;
    event.timeEnd = this.thirdFormGroup.value.eventEndTime;
    event.timeStart = this.thirdFormGroup.value.eventStartTime;

    event.paymentDate = this.fourthFormGroup.value.eventPaymentDate;
    event.paymentDue = this.fourthFormGroup.value.eventPaymentDue;
    event.paymentOption = this.fourthFormGroup.value.eventPaymentOption;
    event.price = this.fourthFormGroup.value.eventPrice;

    event.file = this.fifthFormGroup.value.eventFile;

    event.genderRatio = this.secondFormGroup.value.eventGender;
    event.hostRating = this.ufbs.getStorage().rating;
    event.maxAge = this.secondFormGroup.value.eventMaxAge;
    event.minAge = this.secondFormGroup.value.eventMinAge;
    event.maxGuests = this.secondFormGroup.value.eventMinGuests;
    event.minGuests = this.secondFormGroup.value.eventMinGuests;
    event.queue = this.secondFormGroup.value.eventQueue;
    event.targetGroup = this.secondFormGroup.value.eventTargetGroup;

    event.participants = [{username: this.ufbs.getStorage()._username}];

    event.host = this.ufbs.getStorage().email;

    if (event.hostRating === undefined) {
      event.hostRating = 0;
    }
    this.onNoClick();
    //event.$key = this.efbs.generateNewHashKey(this.ufbs.convertEmailToKey(this.authService.user.email), event.name);
    return event;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  lookUpZip(event) {
    if ( (event.target.value as string).length > 3 ) {
      this.geoAPI.getZipFromCity(event.target.value).map(response => response.json()).subscribe(result => this.apiZipValue = result.navn);
    }
  }

}
