import { EventAddress } from '../helper/EventAddress';
import { Child } from '../helper/child';

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
    newsletterEvents: boolean;
    newsletterDaily: boolean;
    newsletterWeekly: boolean;

    //Rating
    rating: number;
    numberOfEventsHosted: number;
    numberOfEventsAttended: number;


    constructor(username: string, email: string) {
        this._username = username;
        this.email = email;
    }
}

enum Gender {
    MALE, FEMALE
}
