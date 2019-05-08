import { EventAddress } from '../helper/EventAddress';
import { GeoCoord } from 'ng2-haversine';

export class Event {
    key: string;
    name: string;
    description: string;
    dateStart: string;
    timeStart: number;
    timeEnd: number;
    category: string;
    targetGroup: string;
    minAge: number;
    maxAge: number;
    file: File;
    hostRating: number;
    minGuests: number;
    maxGuests: number;
    genderRatio: string;
    geoCoord: GeoCoord;
    queue: boolean;
    inQueue: {};
    address: EventAddress;
    deadlineDate: string;
    deadlineTime: number;
    price: number;
    paymentOption: string;
    paymentDue: string;
    paymentDate: string;
    participants: {};
    host: string;
    accountNumber: number;
    mobilePayNumber: number;
    timestamp: string;
    distance: string;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }

}
