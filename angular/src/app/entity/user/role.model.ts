export class Role {
    fk_id: string;
    type: string;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}