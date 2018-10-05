import { Component, OnInit, Input } from '@angular/core';
import { UserFirebaseService } from '../user-firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../entity/user/user';
import { ProfileAddress } from '../entity/helper/profileAddress';
import { Child } from '../entity/helper/child';
import { NewsletterSetting } from '../entity/helper/newsletterSetting';
import { MobileDetectorService } from '../mobile-detector.service';

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

  // Activation
  activationText = "";
  usernameValidation = "";

  // Subscription
  paidUntil = "Ikke betalt";

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

  constructor(private ufbs: UserFirebaseService, private authService: AuthService, 
    private mds: MobileDetectorService) { }

  username: string = "Indlæser...";
  email: string = "Indlæser...";
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

    this.getDisplayData();
    this.accountIsCompleted();

    this.hasImages = false;

  }

  getDisplayData() {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(value => {
      let user: User = new User(value);
      this.username = user._username;
      this.email = user.email;

      this.state = user.isActivated;
      this.activationText = this.state ? "Deaktiver" : "Aktiver";
   
      let d = new Date(user.subscribed_until);
      this.paidUntil = d.getDate().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getUTCFullYear().toString();

      Object.keys(value).forEach(key => {
        try {
          /*
          this.personDataForm.get(key).setValue(value[key]);
          this.childrenForm.get(key).setValue(value[key]);
          Object.keys(value[key]).forEach(childKey => {
            if (childKey.length > 2) {
              if (childKey.toString() !== 'true' && childKey.toString() !== 'false') {
                this.contactForm.get(childKey).setValue(value[key][childKey]);
              } else {
                this.settingsForm.get(childKey).setValue(value[key][childKey]);
              }
            };
          });
          */
        } catch(error) {
          
        }
      });
    
    });
    
    
  }

  updateProfile(formData) {
    this.ufbs.updateUser(formData, this.authService.afAuth.auth.currentUser.uid);
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(value => {
      this.ufbs.setStorage(Object.assign(JSON.parse(JSON.stringify(value)), User));
    });
    this.accountProgress();
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
    let count = 20;
    let id = this.authService.afAuth.auth.currentUser.uid;
    this.ufbs.getUserByID(id).subscribe(value => {
      count += 10 * Object.keys(value).length;
      count == 100 ? this.ufbs.updateUser({ isActivated: true}, id) : this.ufbs.updateUser({ isActivated: false}, id);
      this.value = count;
    });
}

  accountIsCompleted() {
    this.ufbs.getUserByID(this.authService.afAuth.auth.currentUser.uid).subscribe(value => {
      if (Object.keys(value).length >= 11) {
        //this.state = true;
      }
    })
}

  deactivateAccount(value) {
    this.ufbs.updateUser({isActivated: value}, this.authService.afAuth.auth.currentUser.uid);
  }

  deleteAccount() {
    this.ufbs.deleteUser(this.ufbs.getStorage().email);
  }

  displayBirthdayInput(eventTargetValue) {
    this.numberOfChildren = eventTargetValue;
    this.frontEndModellerChildren = [];
    if (eventTargetValue <= this.maxChildren) {
      for (let i = 0; i < eventTargetValue; i++) {
        this.frontEndModellerChildren.push({id: "kidBirthday" + (1+i), formControlName: "birthdayChild" + (1+i), matDatePicker: "pickerChild" + (1+i), view: "Fødselsdag for barn"});
      }
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
    this.usernameValidation = input;
  }
}
