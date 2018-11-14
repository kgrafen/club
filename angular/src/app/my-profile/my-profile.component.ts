import { Component, OnInit, Input } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { ProfileAddress } from '../entity/helper/profileAddress';
import { Child } from '../entity/helper/child';
import { NewsletterSetting } from '../entity/helper/newsletterSetting';
import { MobileDetectorService } from '../mobile-detector.service';
import { ToastrService } from 'ngx-toastr';
import { GeoCodingApiService } from '../geo-coding-api.service';
import { RatingService } from '../rating.service';
import { EventFirebaseService } from '../event-firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {

  user: User;

  activationError = "Profilen er ikke aktiv. Udfyld alle obligatoriske felter og/eller tryk aktiver i den sidste tab";

  //Progress Bar Material
  color = 'primary';
  mode = 'determinate';
  value = 0;
  //bufferValue= 75;

  public isMobile: boolean = false;

  // Birthday
  today: Date = new Date();
  min = new Date(1920, 0, 1);
  max = new Date( (this.today.getFullYear() - 18), 0, 1);

  // Address
  apiZipValue = "";

  // Activation
  activationText = "";
  usernameValidation = false;

  //Family
  numberOfChildren = 0;
  maxChildren = 3;
  frontEndModellerChildren = [];

  //Settings
  newEvents = false;
  newsDaily = false;
  newsWeekly = false;
  trueText = "Yes";
  falseText = "No";

  // Membership
  userRating = 0;
  eventsHosted = 0;
  eventsAttended = 0;
  metal = "";
  metalName = "Bronze";
  paidUntil;

  constructor(private ufbs: UserFirebaseService, private authService: AuthService, 
    private mds: MobileDetectorService, private toast: ToastrService, 
    private geoAPI : GeoCodingApiService, private rs: RatingService, 
    private efbs: EventFirebaseService, private router: Router) { }

  state: boolean;
  hasImages: boolean;

  public personDataForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl('')
});

public contactForm = new FormGroup({
    phone: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
});

public childrenForm = new FormGroup({
  numberOfChildren: new FormControl(''),
  birthdayChild1: new FormControl(''),
  birthdayChild2: new FormControl(''),
  birthdayChild3: new FormControl('')
});

public settingsForm = new FormGroup({
    newsletterEvent: new FormControl(''),
    newsletterDaily: new FormControl(''),
    newsletterWeekly: new FormControl('')
});

public accountDeletionForm = new FormGroup ({
  confirmationText: new FormControl('')
})

  ngOnInit() {

    this.isMobile = this.mds.check();

    this.hasImages = false;
    this.getDisplayData();
    this.personDataForm.get('birthday').setValue(new Date(1970, 0, 1));
    this.accountProgress();
  }

  getDisplayData() {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(value => {
      this.user = new User(value);
      this.personDataForm.get('firstName').setValue(this.user.firstName);
      this.personDataForm.get('lastName').setValue(this.user.lastName);
      this.personDataForm.get('gender').setValue(this.user.gender);
      this.contactForm.get('phone').setValue(this.user.phone);
      this.contactForm.get('street').setValue(this.user.address.street);
      this.contactForm.get('zip').setValue(this.user.address.zip);
      this.contactForm.get('city').setValue(this.user.address.city);
      this.childrenForm.get('numberOfChildren').setValue(this.user.numberOfChildren);
      if (this.user.children) {
        this.childrenForm.get('birthdayChild1').setValue(this.user.children[0].birthday);
        if (this.user.children[1]) {
          this.childrenForm.get('birthdayChild2').setValue(this.user.children[1].birthday);
        }
        if (this.user.children[2]) {
          this.childrenForm.get('birthdayChild3').setValue(this.user.children[2].birthday);
        }
      }
      if (this.user.newsletterSetting) {
        this.settingsForm.get('newsletterEvent').setValue(this.user.newsletterSetting.newEvents);
        this.settingsForm.get('newsletterDaily').setValue(this.user.newsletterSetting.dailyNews);
        this.settingsForm.get('newsletterWeekly').setValue(this.user.newsletterSetting.weeklyNews);
      }
   
      if (this.user.subscribed_until) {
        this.paidUntil = new Date(this.user.subscribed_until);
      } else {
        this.paidUntil = "Ikke betalt";
      }
    
      this.rs.getRatings().subscribe(snapshots => {
        let userScore = 0;
        let count = 0;
        snapshots.forEach(snapshot => {
          if(snapshot.payload.val().fk_host === this.authService.afAuth.auth.currentUser.uid) {
            userScore += Number(snapshot.payload.val().score);
            count++;
          }
        });
        this.userRating = userScore / count;
      });

      if (this.user.numberOfEventsAttended) {
        this.eventsAttended = this.user.numberOfEventsAttended;
      }

      this.efbs.getEventsByHost(this.authService.afAuth.auth.currentUser.uid).subscribe(snapshots => {
        this.eventsHosted = snapshots.length;
        if (this.eventsHosted >= 300) {
          this.metal = "/assets/images/shield_platinum.ico";
          this.metalName = "Platin";
        } else if (this.eventsHosted >= 100) {
          this.metal = "/assets/images/shield_gold.ico";
          this.metalName = "Guld";
        } else if (this.eventsHosted >= 30) {
          this.metal = "/assets/images/shield_silver.ico";
          this.metalName = "Sølv";
        } else {
          this.metal = "/assets/images/shield_bronze.ico";
          this.metalName = "Bronze";
        }
      });

      this.efbs.getList().subscribe( eventSnapshots => {
        eventSnapshots.forEach( eventSnapshot => {
          if (eventSnapshot.participants !== undefined) {
            Object.values(eventSnapshot.participants).forEach( (value:any) => {
              if (value.username === this.user.username) {
                this.eventsAttended++;
              }
            });
          }
        });
      });
    });
  }

  updateProfile(formData) {
    this.ufbs.updateUser(formData, this.authService.afAuth.auth.currentUser.uid);
  }

  updateContact(formData) {
    let mergedObj = { phone: formData.phone, address: {street: formData.street, city: formData.city, zip: formData.zip} };
    this.updateProfile(mergedObj);
  }

  updateChildren(formData) {
    let updatesObj = {numberOfChildren: formData.numberOfChildren};
    let appendObj = {};
    if (formData.numberOfChildren > 0) {
      appendObj = {children: {childOne: formData.birthdayChild1, childTwo: formData.birthdayChild2, 
        childThree: formData.birthdayChild3}};
    }
    let mergedObj = Object.assign(updatesObj, appendObj);
    this.updateProfile(mergedObj);
  }

  updateSettings(formData) {
    let updatesObj = {newsletter: { dailyNews: formData.newsletterDaily, weeklyNews: formData.newsletterWeekly, 
                      newEvents: formData.newsletterEvent}};
    this.updateProfile(updatesObj);
  }

  updatePersonData(formData) {
    this.updateProfile(formData);
  }

  accountProgress() {
    let point = 100 / 12;
    console.log(point);
    let filled = 0;
    let id = this.authService.afAuth.auth.currentUser.uid;
    console.log("Evaluating progress");
    this.ufbs.getUserByID(id).subscribe(value => {
      console.log(value);
      filled = point * Object.keys(value).length;
      console.log(filled);
      filled === 100 ? this.ufbs.updateUser({ isActivated: true}, id) : this.ufbs.updateUser({ isActivated: false}, id);
      this.value = filled;
    });
}

  deactivateAccount(value) {
    this.ufbs.updateUser({isActivated: value}, this.authService.afAuth.auth.currentUser.uid);
  }

  deleteAccount() {
    window.confirm('Er du sikker? (Sidste advarsel)');
    this.authService.isDeletingUser = true;
    this.ufbs.deleteUser(this.authService.afAuth.auth.currentUser.uid).then( () => {
      this.authService.afAuth.auth.currentUser.delete().then(() => {
        this.authService.doSignout();
      });
    });
  }

  displayBirthdayInput(eventTargetValue) {
    if (eventTargetValue > 0) {
      this.numberOfChildren = eventTargetValue;
      this.frontEndModellerChildren = [];
      for (let i = 0; i < this.maxChildren; i++) {
        this.frontEndModellerChildren.push({id: "kidBirthday" + (1+i), formControlName: "birthdayChild" + (1+i), matDatePicker: "pickerChild" + (1+i), view: "Fødselsdag for barn"});
      }
      if (eventTargetValue > 3) {
        this.toast.toastrConfig.positionClass = 'toast-bottom-center';
        this.toast.info('Eftersom at du har mere end 3 børn, angiv kun fødselsdagen for de 3 yngste','Info')
        this.toast.toastrConfig.positionClass = 'toast-top-right';
      }
    } else {
      this.frontEndModellerChildren = [];
    }
  
  }

  changedNewsEvent() {
    this.newEvents = !this.newEvents;
  }

  changedNewsDaily() {
    this.newsDaily = !this.newsDaily;
  }

  changedNewsWeekly() {
    this.newsWeekly = !this.newsWeekly;
  }

  usernameInput(input) {
    if (input === this.user.username) {
      this.usernameValidation = true;
    }
  }

  lookUpCity(eventTargetValue) {
    if ( (eventTargetValue as string).length > 3 ) {
      this.geoAPI.getZipFromCity(eventTargetValue).map(response => response.json()).subscribe(result => this.contactForm.get('city').setValue(result.navn));
    }
  }
}
