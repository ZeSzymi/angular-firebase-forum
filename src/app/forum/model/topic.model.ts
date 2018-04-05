import { Comment } from './comment.model';
export class Topic {
    constructor(public name: string, public content: string, public imagePath: string, public comment: Comment[]) {}
}
