import { EventAddress } from '../helper/EventAddress';
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
    isActivated: boolean = false;
    subscribed_until: Date;
    fk_user_role: string;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}

export enum Gender {
    MALE, FEMALE
}
