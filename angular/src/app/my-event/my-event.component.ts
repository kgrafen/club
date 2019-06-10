import { Component, OnInit } from '@angular/core';
import { Event } from '../entity/event/event.model';
import { EventFirebaseService } from '../event-firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserFirebaseService } from '../user-firebase.service';
import { GeoCodingApiService } from '../geo-coding-api.service';
import { EventAddress } from '../entity/helper/EventAddress';
import { User } from '../entity/user/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ParticipantListActionsComponent } from '../participant-list-actions/participant-list-actions.component';

export interface ActionData {
  uid: string;
  key: string;
  un: string;
}

@Component({
  selector: 'my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css']
})
export class MyEventComponent implements OnInit {

  constructor(private efbs: EventFirebaseService, private authService: AuthService, 
    private ufbs: UserFirebaseService, 
    private _formBuilder: FormBuilder, private geoAPI: GeoCodingApiService,
    private toast: ToastrService, private router: Router,
    public dialog: MatDialog) { }

  myEvent: Event;
  hasUpdated = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  apiZipValue = "By";
  lookupCity;
  isPaymentDeadlineDate = false;
  displayMobilePayInput = false;
  displayAccountNumberInput = false;
  hasPrice = false;
  isTransferingMoney = false;

  // Participants
  participantsDisplayNames = [];
  participantsData = []
  
  // inQueue
  queueDisplayNames = [];
  queueData = [];

  // Dialog
  dialogWidth = screen.width / 3 + "px";
  dialogHeight = screen.height / 5 + "px";


  ngOnInit() {
    this.myEvent = this.efbs.myEventSelection;

    if (this.myEvent === undefined) {
      this.router.navigate(['my-events']);
    }

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

    this.getDisplayData();
    this.renderParticipantsIntoView();
    this.renderParticipantsInQueueIntoView();

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

  onUpdateEvent() {
    let e: Event = this.formDataToModel();
    this.efbs.updateEvent(this.efbs.myEventSelection.key, e).then( () => {
      this.toast.success('Dit event er blevet opdateret','👍  ');
      this.hasUpdated = true;
      setTimeout( () => {
        this.hasUpdated = false;
      }, 2000);
    });
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
    event.mobilePayNumber = this.fourthFormGroup.value.eventMobilePayNumber;
    event.accountNumber = this.fourthFormGroup.value.eventAccountNumber;

    event.file = this.fifthFormGroup.value.eventFile;

    event.genderRatio = this.secondFormGroup.value.eventGender;
    event.hostRating = this.ufbs.getStorage().rating;
    event.maxAge = this.secondFormGroup.value.eventMaxAge;
    event.minAge = this.secondFormGroup.value.eventMinAge;
    event.maxGuests = this.secondFormGroup.value.eventMaxGuests;
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
    const event = this.efbs.myEventSelection
    this.myEvent = this.efbs.myEventSelection;

    
    
    
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

  getParticipantKey(): Promise<string> {
    let isDone = false;
    return new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.participantsData.length; i++) {
        const observerSeven = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe((userSnapshot:any) => {
          if (this.participantsData[i].username ===  userSnapshot.username) {
            
            isDone = true;
            resolve(userSnapshot.username);
          } 
          observerSeven.unsubscribe();
        });
      }
      if (isDone) {
        resolve("Not Found");
      }
    });
  }

  renderParticipantsIntoView() {
    let observerTwo = this.efbs.getEventByKey(this.myEvent.key).snapshotChanges().subscribe(then => {
      this.myEvent = new Event(then.payload.val());
      this.participantsData = [];
      this.participantsDisplayNames = [];
      for (let property in this.myEvent.participants) {
        for (let value in this.myEvent.participants[property]) {
            this.participantsDisplayNames.push(this.myEvent.participants[property][value]);
            this.participantsData.push({key: property, username: this.myEvent.participants[property][value]});
        }
      }
    });
  }

  renderParticipantsInQueueIntoView() {
    let observerTwo = this.efbs.getEventByKey(this.myEvent.key).snapshotChanges().subscribe(then => {
      this.myEvent = new Event(then.payload.val());
      this.queueData = [];
      this.queueDisplayNames = [];
      for (let property in this.myEvent.inQueue) {
        for (let value in this.myEvent.inQueue[property]) {
            this.queueDisplayNames.push(this.myEvent.inQueue[property][value]);
            this.queueData.push({key: property, username: this.myEvent.inQueue[property][value]});
        }
      }
    });
  }

  onAction(userID): void {

    const observer = this.ufbs.getUserByID(userID).subscribe( (userSnapshot:any) => {

      const dialogRef = this.dialog.open(ParticipantListActionsComponent, {
        width: this.dialogWidth,
        height: this.dialogHeight,
        data: {uid: userID, key: this.efbs.myEventSelection.key, un: userSnapshot.username}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });

      observer.unsubscribe();
    });
  }
}
