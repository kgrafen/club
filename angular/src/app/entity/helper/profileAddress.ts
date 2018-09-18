export class ProfileAddress {
    street: string;
    city: string;
    zip: number;

    constructor(street: string, city: string, zip:number) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}