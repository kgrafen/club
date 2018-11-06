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

    this.getDisplayData();

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
    this.efbs.updateEvent(this.efbs.myEventSelection.key, e);
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

  getDisplayData() {
    const event = this.efbs.myEventSelection;

    console.log( new Date(event.deadlineDate) );
    console.log( new Date(event.dateStart) );
    
    /* First form group*/
    this.firstFormGroup.get('eventName').setValue(event.name);
    this.firstFormGroup.get('eventLocationCity').setValue(event.address.city);
    this.firstFormGroup.get('eventLocationStreet').setValue(event.address.street);
    this.firstFormGroup.get('eventLocationZip').setValue(event.address.zip);
    this.firstFormGroup.get('eventDescription').setValue(event.description);
    this.firstFormGroup.get('eventCategory').setValue(event.category);

    /* Second form group */
    this.secondFormGroup.get('eventTargetGroup').setValue(event.targetGroup);
    this.secondFormGroup.get('eventMinAge').setValue(event.minAge);
    this.secondFormGroup.get('eventMaxAge').setValue(event.maxAge);
    this.secondFormGroup.get('eventMinGuests').setValue(event.minGuests);
    this.secondFormGroup.get('eventMaxGuests').setValue(event.maxGuests);
    this.secondFormGroup.get('eventGender').setValue(event.genderRatio);
    this.secondFormGroup.get('eventQueue').setValue(event.queue);

    /* Third form group */
    this.thirdFormGroup.get('eventDate').setValue(new Date(event.dateStart));
    this.thirdFormGroup.get('eventStartTime').setValue(event.timeStart);
    this.thirdFormGroup.get('eventEndTime').setValue(event.timeEnd);
    this.thirdFormGroup.get('eventDeadlineDate').setValue(new Date(event.deadlineDate));
    this.thirdFormGroup.get('eventDeadlineTime').setValue(event.deadlineTime);

    /* Fourth form group */
    this.fourthFormGroup.get('eventPrice').setValue(event.price);
    this.fourthFormGroup.get('eventPaymentOption').setValue(event.paymentOption);
    this.fourthFormGroup.get('eventPaymentDue').setValue(event.paymentDue);
    this.fourthFormGroup.get('eventPaymentDate').setValue(event.paymentDate);
    
    /* Fifth form group */
    this.fifthFormGroup.get('eventFile').setValue(event.file);

  }

}
