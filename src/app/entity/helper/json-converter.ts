import { User } from '../user/user';

export class JsonConverter {
    public convertJsonToUserObj(json: string) : User {
        let obj = JSON.parse(json);
        let user = new User(obj._username, obj.email);
        user.address = obj.address;
        user.birthday = obj.birthday;
        user.children = obj.children;
        user.email = obj.email;
        user.firstName = obj.firstName;
        user.gender = obj.gender;
         user.lastName = obj.lastName;
        user.newsletterDaily = obj.newsletterDaily;
        user.newsletterEvents = obj.newsletterEvents;
        user.newsletterWeekly = obj.newsletterWeekly;
        user.numberOfChildren = obj.numberOfChildren;
        user.numberOfEventsAttended = obj.numberOfEventsAttended;
        user.numberOfEventsHosted = obj.numberOfEventsHosted;
        user.phone = obj.phone;
        user.rating = obj.rating;
        user.children = obj.children;
        return user;
    }
}