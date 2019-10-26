import { Child } from '../helper/child';
import { NewsletterSetting } from '../helper/newsletterSetting';

export class User {
    // Person data
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    gender: Gender;
    pictureUrl: string;

    // Contact
    phone: number;
    address: EventAddress;

    //Family
    numberOfChildren: number;
    children = {childOne: '', childTwo: '', childThree: ''};

    //Images * Might need new library

    //Settings
    notifications: string;

    //Rating
    rating: number;
    numberOfEventsHosted: number;
    numberOfEventsAttended: number;

    //Friendlist
    friendlist: string[];

    //Account status
    isActivated: boolean = true;
    subscribed_until: Date;
    fk_user_role: string;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}

export enum Gender {
    MALE, FEMALE
}

export class EventAddress {
  street: string;
  city: string;
  zip: number;

  constructor(street: string, city: string, zip:number) {
      this.street = street;
      this.city = city;
      this.zip = zip;
  }
}