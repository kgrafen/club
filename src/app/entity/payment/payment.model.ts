export class Payment {
    user: string;
    amount: number;
    date: Date;
    api_response: boolean;
    subscription_period: number;

    constructor(user: string, amount:number, date: Date, api_response: boolean, 
        subscription_period: number) {
            this.user = user;
            this.amount = amount;
            this.date = date;
            this.api_response = api_response;
            this.subscription_period = subscription_period;
    }
}