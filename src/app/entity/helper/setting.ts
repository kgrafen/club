export class Setting {
    type: string;
    value: boolean;

    constructor(type: string, value: boolean) {
        this.type = type;
        this.value = value;
    }
}