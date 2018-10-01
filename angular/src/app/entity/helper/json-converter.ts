import { User } from '../user/user';
import { Payment } from '../payment/payment.model';
import { Event } from '../event/event.model';
import { Rating } from '../rating/rating.model';

export class JsonConverter {
    public convertJsonToUserObj(json: string) : User {
        let obj = JSON.parse(json);
        let user: User = Object.assign(obj, User);
        /*
        let user = new User(obj._username, obj.email);
        user.address = obj.address;
        user.birthday = obj.birthday;
        user.children = obj.children;
        user.email = obj.email;
        user.firstName = obj.firstName;
        user.gender = obj.gender;
        user.lastName = obj.lastName;
        user.newsletterSetting = obj.newsletterSetting;
        user.numberOfChildren = obj.numberOfChildren;
        user.numberOfEventsAttended = obj.numberOfEventsAttended;
        user.numberOfEventsHosted = obj.numberOfEventsHosted;
        user.phone = obj.phone;
        user.rating = obj.rating;
        user.subscribed_until = obj.subscribed_until; */
        return user;
    }

    public convertJsonToPaymentObj(json: string): Payment {
        let obj = JSON.parse(json);
        let payment = new Payment(obj.user, obj.amount, obj.date, obj.api_response, 
            obj.subscription_period);
        return payment;
    }

    public convertJsonToEventObj(json: string): Event {
        let obj = JSON.parse(json);
        let event: Event = Object.assign(obj, Event);
        /*
        let event = new Event();
        event.key = obj.key;
        event.address = obj.address;
        event.category = obj.category;
        event.dateStart = obj.dateStart;
        event.deadlineDate = obj.deadlineDate;
        event.deadlineTime = obj.deadlineTime;
        event.description = obj.description;
        event.file = obj.file;
        event.genderRatio = obj.genderRatio;
        event.hostRating = obj.hostRating;
        event.maxAge = obj.maxAge;
        event.maxGuests = obj.maxGuests;
        event.minAge = obj.minAge;
        event.minGuests = obj.minGuests;
        event.name = obj.name;
        event.paymentDate = obj.paymentDate;
        event.paymentDue = obj.paymentDue;
        event.paymentOption = obj.paymentOption;
        event.price = obj.price;
        event.queue = obj.queue;
        event.targetGroup = obj.targetGroup;
        event.timeEnd = obj.timeEnd;
        event.timeStart = obj.timeStart;
        event.participants = obj.participants;
        event.host = obj.host;*/
        return event;
    }

    public convertJsonToRatingObj(json: string): Rating {
        let obj = JSON.parse(json);
        let rating = Object.assign(obj, Rating);
        return rating;
    }
}