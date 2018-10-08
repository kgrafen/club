import { Component, OnInit } from '@angular/core';
import { Event } from '../entity/event/event.model';
import { EventFirebaseService } from '../event-firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import { GeoCodingApiService } from '../geo-coding-api.service';
import { EventAddress } from '../entity/helper/EventAddress';
import { User } from '../entity/user/user';

@Component({
  selector: 'my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  constructor(private efbs: EventFirebaseService, private authService: AuthService, 
    private ufbs: UserFirebaseService, 
    private _formBuilder: FormBuilder, private geoAPI: GeoCodingApiService) { }

  myEvent: Event;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  apiZipValue = "By";
  lookupCity;
  isPaymentDeadlineDate = false;

  ngOnInit() {
    this.myEvent = this.efbs.myEventSelection;
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

  onUpdateEvent() {
    let e: Event = this.formDataToModel();
    this.efbs.updateEvent(e.key, e);
  } 

  formDataToModel(): Event {
    const event = new Event({});
  
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

    event.participants = [{username: this.ufbs.getStorage().username}];

    event.host = this.authService.afAuth.auth.currentUser.uid;

    if (event.hostRating === undefined) {
      event.hostRating = 0;
    }

    return event;
  }

  lookUpZip(event) {
    if ( (event.target.value as string).length > 3 ) {
      this.geoAPI.getZipFromCity(event.target.value).map(response => response.json()).subscribe(result => this.apiZipValue = result.navn);
    }
  }

}
