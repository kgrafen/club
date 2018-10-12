import { WallPost } from "./wall-post.model";

export class Wall {

    fk_event: string;
    posts: WallPost[];

    constructor(obj) {
        obj && Object.assign(this, obj);
        this.posts = [];
    }
}