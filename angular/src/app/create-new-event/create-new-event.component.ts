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
import { User } from '../entity/user/user';
import { WallService } from '../wall.service';
import { ToastrService } from 'ngx-toastr';
import { GeoCoord } from 'ng2-haversine';

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
  displayMobilePayInput = false;
  displayAccountNumberInput = false;
  isTransferingMoney = false;

  apiZipValue = "By";
  geoCoord: GeoCoord;
  lookupCity;

  isPreviewing = false;
  hasPrice = false;
  previews = [];

  // Date validation
  minDate = new Date();
  maxDate = new Date( this.minDate.getFullYear()+1, this.minDate.getMonth(), this.minDate.getDay());
  maxRegistrationDate = new Date();

  constructor(private efbs: EventFirebaseService, private authService: AuthService, 
              private ufbs: UserFirebaseService, 
              public dialogRef: MatDialogRef<CreateNewEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _formBuilder: FormBuilder, private geoAPI: GeoCodingApiService, 
              private ws: WallService, private toast: ToastrService) { }

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
      eventPaymentDate: ['', Validators.required],
      eventMobilePayNumber : ['', Validators.required],
      eventAccountNumber: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      eventFile: ['', Validators.required],
    });
  }

  onWhenPayChange(value) {
    if(value === "Dato") {
      this.isPaymentDeadlineDate = true;
    } 
    else {
      this.isPaymentDeadlineDate = false;
    }
  }

  onPaymentOptionChange(value) {
    if (value === 'Mobilepay') {
      this.displayMobilePayInput = true;
      this.isTransferingMoney = true;
      this.displayAccountNumberInput = false;
    } else if (value === 'Bankoverførelse') {
      this.displayAccountNumberInput = true;
      this.isTransferingMoney = true;
      this.displayMobilePayInput = false;
    } else {
      this.displayMobilePayInput = false;
      this.displayAccountNumberInput = false;
      this.isTransferingMoney = false;
    }
  }

  onSubmitEvent() {
    let observer = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( (userSnapshot:any) => {
      let e: Event = this.formDataToModel(userSnapshot);
      console.log('new event', e);
      this.efbs.insertEvent(e).then( (thenableRef) => {
        let key = thenableRef.path.pieces_[1];
        this.ws.insertWall( {fk_event: key, posts: {} } );
      });
      this.ufbs.updateUser({numberOfEventsHosted: userSnapshot.numberOfEventsHosted + 1}, this.authService.afAuth.auth.currentUser.uid).then( () => {
        observer.unsubscribe();
        });
      });
  } 

  formDataToModel(userSnapshot): Event {

    const event = new Event({});

    event.name = this.firstFormGroup.value.eventName;
    event.address = new EventAddress(this.firstFormGroup.value.eventLocationStreet, 
                    this.apiZipValue, this.firstFormGroup.value.eventLocationZip);
    event.category = this.firstFormGroup.value.eventCategory;
    event.description = this.firstFormGroup.value.eventDescription;
    event.geoCoord = this.geoCoord;

    event.dateStart = this.thirdFormGroup.value.eventDate.toString();
    event.deadlineDate = this.thirdFormGroup.value.eventDeadlineDate.toString();
    event.deadlineTime = this.thirdFormGroup.value.eventDeadlineTime;
    event.timeEnd = this.thirdFormGroup.value.eventEndTime;
    event.timeStart = this.thirdFormGroup.value.eventStartTime;

    event.paymentDate = this.fourthFormGroup.value.eventPaymentDate.toString();
    event.paymentDue = this.fourthFormGroup.value.eventPaymentDue;
    event.paymentOption = this.fourthFormGroup.value.eventPaymentOption;
    event.price = this.fourthFormGroup.value.eventPrice;
    event.mobilePayNumber = this.fourthFormGroup.value.eventMobilePayNumber;
    event.accountNumber = this.fourthFormGroup.value.eventAccountNumber;

    event.file = this.fifthFormGroup.value.eventFile;

    event.genderRatio = this.secondFormGroup.value.eventGender;
    event.hostRating = userSnapshot.rating;
    event.maxAge = this.secondFormGroup.value.eventMaxAge;
    event.minAge = this.secondFormGroup.value.eventMinAge;
    event.maxGuests = this.secondFormGroup.value.eventMaxGuests;
    event.minGuests = this.secondFormGroup.value.eventMinGuests;
    event.queue = this.secondFormGroup.value.eventQueue;
    event.targetGroup = this.secondFormGroup.value.eventTargetGroup;

    event.participants = [{username: userSnapshot.username}];

    event.host = this.authService.afAuth.auth.currentUser.uid;

    if (event.hostRating === undefined) {
      event.hostRating = 0;
    }

    if (!this.isTransferingMoney) {
      event.paymentDue = "Kontant ved ankomst på dagen";
    }
    this.onNoClick();
    return event;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  lookUpZip(event) {
    if ( (event.target.value as string).length > 3 ) {
      this.geoAPI.getZipFromCity(event.target.value).map(response => response.json()).subscribe(result => {
        this.geoCoord = {
          latitude: result.visueltcenter[1],
          longitude: result.visueltcenter[0]
        };
        this.apiZipValue = result.navn;
      });
    }
  }

  displayPreview() {
    this.previews.push( {label: 'Titel', body: this.firstFormGroup.value.eventName} );
    this.previews.push( {label: 'Beskrivelse', body: this.firstFormGroup.get('eventDescription').value} );
    this.previews.push( {label: 'Kategori', body: this.firstFormGroup.get('eventCategory').value} );
    this.previews.push( {label: 'Adresse', body: `
                                                ${this.firstFormGroup.get('eventLocationStreet').value}, 
                                                ${this.firstFormGroup.get('eventLocationZip').value}, 
                                                ${this.apiZipValue} `} );
    this.previews.push( {label: 'Kønsfordeling', body: this.secondFormGroup.value.genderRatio} );
    this.previews.push( {label: 'Børn', body: this.secondFormGroup.value.eventTargetGroup} );
    this.previews.push( {label: 'Aldersgruppe', body: `${this.secondFormGroup.value.eventMinAge} til ${this.secondFormGroup.value.eventMaxAge}`} );
    this.previews.push( {label: 'Antal gæster', body: `${this.secondFormGroup.value.eventMinGuests} til ${this.secondFormGroup.value.eventMaxGuests}`  } );
    this.previews.push( {label: 'Tving på venteliste', body: this.secondFormGroup.value.eventQueue} );
    this.previews.push( {label: 'Dato for eventet', body: this.thirdFormGroup.value.eventDateStart} );
    this.previews.push( {label: 'Tidspunkt for eventet', body: this.thirdFormGroup.value.eventTimeStart} );
    this.previews.push( {label: 'Tilmeldingsfrist dato', body: this.thirdFormGroup.value.eventDeadlineDate} );
    this.previews.push( {label: 'Tilmeldingsfrist tid', body: this.thirdFormGroup.value.eventDeadlineTime} );
    this.previews.push( {label: 'Pris', body: this.fourthFormGroup.value.eventPrice} );
    this.previews.push( {label: 'Betalingsform', body: this.fourthFormGroup.value.eventPaymentOption} );
    this.previews.push( {label: 'Hvornår betales der', body: this.fourthFormGroup.value.eventPaymentDate} );
    this.isPreviewing = true;
  }

  phoneValidation(eventTargetValue) {
    if (!/^\d+$/.test(eventTargetValue) && eventTargetValue !== "") {
      this.toast.toastrConfig.positionClass = "toast-bottom-center";
      this.toast.warning("🤖 Jeg er ret sikker på at telefonnumre ikke har bogstaver.");
      this.toast.toastrConfig.positionClass = "toast-top-right";
    }
  }

  accountNumberValidation(eventTargetValue) {
    if (!/^\d+$/.test(eventTargetValue) && eventTargetValue !== "") {
      this.toast.toastrConfig.positionClass = "toast-bottom-center";
      this.toast.warning("🤖 Ifølge bankerne i Danmark, så er bogstaver endnu ikke en del af kontonumre");
      this.toast.toastrConfig.positionClass = "toast-top-right";
    }
  }

  onPriceEnter(eventTargetValue) {
    if (eventTargetValue > 0) {
      this.hasPrice = true;
    }
  }

}
