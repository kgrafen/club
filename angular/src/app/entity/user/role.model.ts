const userTypes = { ADMIN: "admin", MEMBER: "member", MODERATOR: "moderator"}


export class Role {
    fk_id: string;
    type = userTypes.MEMBER;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}