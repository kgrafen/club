import { EventAddress } from '../helper/EventAddress';
import { Child } from '../helper/child';
import { NewsletterSetting } from '../helper/newsletterSetting';

export class User {
    // Person data
    _username: string;
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
    children: Child[];

    //Images * Might need new library

    //Settings
    newsletterSetting: NewsletterSetting;

    //Rating
    rating: number;
    numberOfEventsHosted: number;
    numberOfEventsAttended: number;

    //Friendlist
    friendlist: string[];

    //Account status
    isActivated: boolean;
    subscribed_until: Date;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}

enum Gender {
    MALE, FEMALE
}
