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
  warningCount = 0;
  confirmText = "";
  btnDisabled = true;
  btnText = "Låst";
  accountDeletionConfirmationText = "";

  // Subscription
  paidUntil = "Ikke betalt";

  constructor(private ufbs: UserFirebaseService, private authService: AuthService, 
    private mds: MobileDetectorService) { }

  username: string = "Indlæser...";
  email: string = "Indlæser...";
  activation: boolean;
  hasImages: boolean;

  public personDataForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl('')
});

public contactForm = new FormGroup({
    phone: new FormControl(''),
    addressStreet: new FormControl(''),
    addressCity: new FormControl(''),
    addressZip: new FormControl(''),
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
    this.activation = this.accountIsCompleted();
    this.hasImages = false;
    this.user = this.ufbs.getStorage();

    if (this.ufbs.getStorage().isActivated) {
      this.btnText = "Deaktiver";
      this.btnDisabled = false;
    } else {
      if (this.activation) {
        this.btnText = "Activate";
        this.btnDisabled = false;
      }
    }

  }

  getDisplayData() {
    let user = this.ufbs.getStorage();
    this.username = user._username;
    this.email = user.email;
    this.paidUntil = user.subscribed_until.getDate().toString() + "-" + user.subscribed_until.getMonth().toString() + "-" +
    user.subscribed_until.getUTCFullYear().toString();
    console.log(this.paidUntil);

    if (user.firstName != undefined) {
      this.personDataForm.get('firstName').setValue(user.firstName);
    }
    if (user.lastName != undefined) {
      this.personDataForm.get('lastName').setValue(user.lastName);
    }
    if (user.birthday != undefined) {
      this.personDataForm.get('birthday').setValue(user.birthday);
    }
    if(user.gender != undefined) {
      this.personDataForm.get('gender').setValue(user.gender);
    }
    if(user.phone != undefined) {
      this.contactForm.get('phone').setValue(user.phone);
    }
    if(user.address != undefined && user.address.street) {
      this.contactForm.get('addressStreet').setValue(user.address.street);
    }
    if(user.address != undefined && user.address.city) {
      this.contactForm.get('addressCity').setValue(user.address.city);
    }
    if(user.address != undefined && user.address.zip) {
      this.contactForm.get('addressZip').setValue(user.address.zip);
    }
    if(user.newsletterSetting != undefined && user.newsletterSetting.newEvents) {
      this.settingsForm.get('newsletterEvent').setValue(user.newsletterSetting.newEvents);
    }
    if(user.newsletterSetting != undefined && user.newsletterSetting.dailyNews) {
      this.settingsForm.get('newsletterDaily').setValue(user.newsletterSetting.dailyNews);
    }
    if(user.newsletterSetting != undefined && user.newsletterSetting.weeklyNews) {
      this.settingsForm.get('newsletterWeekly').setValue(user.newsletterSetting.weeklyNews);
    }
    if (user.numberOfChildren != undefined) {
      this.childrenForm.get('numberOfChildren').setValue(user.numberOfChildren);
    }
    if (user.children != undefined) {
      if (user.children.length > 0) {
        this.childrenForm.get('birthdayChild1').setValue(user.children[0].birthday);
      }
      if (user.children.length > 1) {
        this.childrenForm.get('birthdayChild2').setValue(user.children[1].birthday);
      }
      if (user.children.length > 2) {
        this.childrenForm.get('birthdayChild3').setValue(user.children[2].birthday);
      }
    }
    this.value = this.accountProgress();
  }

  updateProfile(user: User) {
    this.ufbs.setStorage(user);
    this.ufbs.updateUser(user);
    this.value = this.accountProgress();
  }

  updateContact(formData) {
    let user = this.ufbs.getStorage();
    const newUser = new User(user._username, user.email);
    user.phone = formData.phone;
    user.address = new ProfileAddress(formData.addressStreet, formData.addressCity, formData.addressZip);
    this.updateProfile(user);
  }

  updateChildren(formData) {
    let user = this.ufbs.getStorage();
    const newUser = new User(user._username, user.email);
    user.numberOfChildren = formData.numberOfChildren;
    
    if (user.children != undefined) {
      // If no, then we are overwriting.
      if (formData.birthdayChild1 != undefined) {
        user.children[0] = formData.birthdayChild1;
      }
      if (formData.birthdayChild2 != undefined) {
        user.children[0] = formData.birthdayChild2;
      }
      if (formData.birthdayChild3 != undefined) {
        user.children[0] = formData.birthdayChild3;
      }
    } else {
      // If yes then we are creating new array entries
      user.children = [];
      if (formData.birthdayChild1 != undefined) {
        user.children.push(new Child(formData.birthdayChild1));
      }
      if (formData.birthdayChild2 != undefined) {
        user.children.push(new Child(formData.birthdayChild2));
      }
      if (formData.birthdayChild3 != undefined) {
        user.children.push(new Child(formData.birthdayChild3));
      }
    }

     this.updateProfile(user);
  }

  updateSettings(formData) {
    let user = this.ufbs.getStorage();
    const newUser = new User(user._username, user.email);
    
    if (user.newsletterSetting == undefined) {
      user.newsletterSetting = new NewsletterSetting();
    }
    // Usage of inverse boolean to compensate for the css change to have my toggles start on "yes" == 1
    if (formData.newsletterEvent != undefined) {
      user.newsletterSetting.newEvents = !formData.newsletterEvent;
    } 
    if (formData.newsletterDaily != undefined) {
      user.newsletterSetting.dailyNews = !formData.newsletterDaily;
    } 
    if (formData.newsletterWeekly != undefined) {
      user.newsletterSetting.weeklyNews = !formData.newsletterWeekly;
    } 
    this.updateProfile(user);
  }

  updatePersonData(formData) {
    let user = this.ufbs.getStorage();
    const newUser = new User(user._username, user.email);
    user.birthday = formData.birthday;
    user.firstName = formData.firstName;
    user.lastName = formData.lastName;
    user.gender = formData.gender;
    this.updateProfile(user);
  }

  accountProgress(): number {
    let user = this.ufbs.getStorage();
    let count = 20;
    if (user.firstName != undefined) count+=10;
    if (user.lastName != undefined) count+=10;
    if (user.birthday != undefined) count+=10;
    if (user.gender != undefined) count+=10;
    if (user.phone != undefined) count+=10;
    if (user.address != undefined) count+=10;
    if (user.numberOfChildren != undefined) count+=10;
    if (user.newsletterSetting != undefined) count+=10;

    count == 100 ? user.isActivated = true : user.isActivated = false;

    return count;
}

  accountIsCompleted(): boolean {
    let user = this.ufbs.getStorage();
    return (user.firstName != "" && user.lastName != "" && user.birthday != undefined 
    && user.gender != undefined && user.phone > 10000000 && user.address != undefined 
    && user.numberOfChildren >= 0 && user.children != undefined 
    && user.newsletterSetting != undefined)
}

  deactivateAccount() {
    this.warningCount++;
    this.confirmText = "Tryk " + (3 - this.warningCount) + " gange for at bekræfte";
    if (this.warningCount >= 3 && this.accountIsCompleted()) {
      this.btnDisabled = true;
      const user: User = this.ufbs.getStorage();
      user.isActivated ? user.isActivated = false : user.isActivated = true;
      this.ufbs.setStorage(user);
      let str = user.isActivated ? "aktiveret." : "deaktiveret.";
      this.confirmText = "Profilen er nu " + str;
    } else {
      this.btnDisabled = true;
    }
  }

  deleteAccount() {
    this.ufbs.deleteUser(this.ufbs.getStorage().email);
  }

}
