import { eventAddress } from '../helper/eventAddress';

export class Event {
    $key: string;
    name: string;
    description: string;
    dateStart: Date;
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
    queue: boolean;
    address: eventAddress;
    deadlineDate: Date;
    deadlineTime: number;
    price: number;
    paymentOption: string;
    paymentDue: string;
    paymentDate: Date;
}
