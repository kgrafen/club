export class WallPost {
    key: string;
    fk_id: string;
    message: string;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }

}