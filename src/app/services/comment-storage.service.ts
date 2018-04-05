import { Injectable } from '@angular/core';
import { Comment } from './../forum/model/comment.model';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { AuthService } from './auth.service';

@Injectable()
export class CommentStorageService {
    constructor(private http: Http, private authService: AuthService) {}
    getSpecificCommentSubject: Subject<Comment[]> = new Subject<Comment[]>();
    getComments(index) {
        this.http.get('https://forum-742d6.firebaseio.com/topics.json').subscribe(
            (response: Response) => {
                const comments: Comment[] = [];
                if (response.json()[index].comment) {
                    for (let i = 0; i < response.json()[index].comment.length; i += 1) {
                        comments.push(new Comment(
                            response.json()[index].comment[i].content,
                            response.json()[index].comment[i].user
                        ));
                    }
                        this.getSpecificCommentSubject.next(comments);
                }
            }
        );
    }
    addComment(index, comment) {
        console.log(index);
        this.http.put('https://forum-742d6.firebaseio.com/topics/' + index + '/comment.json?auth=' +
        this.authService.getTokenId(), comment).subscribe(
            (response: Response) => {
                this.getSpecificCommentSubject.next(response.json());
            }
        );
    }
}
