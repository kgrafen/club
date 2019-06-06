import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeoCodingApiService } from 'src/app/geo-coding-api.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  newEventFormGroup: FormGroup;
  apiZipValue = "By";

  constructor(
    private _formBuilder: FormBuilder,
    private geoAPI: GeoCodingApiService,
    ) { }

  // @ViewChild('title') nameInput: MatInput;

  ngOnInit() {
    this.newEventFormGroup = this._formBuilder.group({
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required],
      eventLocationStreet: ['', Validators.required],
      eventLocationCity: [''],
      eventLocationZip: ['', Validators.required],
      eventCategory: ['', Validators.required]
    });
    //  this.nameInput.focus();
  }

  onSubmitEvent() {

    if (this.newEventFormGroup.valid) {
      console.log('form submitted');
    } else {
      console.log('form rejected', this.newEventFormGroup);
      // validate all form fields
    }

    // let observer = this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe( (userSnapshot:any) => {
    //   let e: Event = this.formDataToModel(userSnapshot);
    //   this.efbs.insertEvent(e).then( (thenableRef) => {
    //     let key = thenableRef.path.pieces_[1];
    //     this.ws.insertWall( {fk_event: key, posts: {} } );
    //   });
    //   this.ufbs.updateUser({numberOfEventsHosted: userSnapshot.numberOfEventsHosted + 1}, this.authService.afAuth.auth.currentUser.uid).then( () => {
    //     observer.unsubscribe();
    //     });
    //   });
  } 

  lookUpZip(event) {
    if ( (event.target.value as string).length > 3 ) {
      this.geoAPI.getZipFromCity(event.target.value).map(response => response.json()).subscribe(result => this.apiZipValue = result.navn);
    }
  }

}
