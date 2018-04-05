import { AuthService } from './../../../services/auth.service';
import { CommentStorageService } from './../../../services/comment-storage.service';
import { Comment } from './../../model/comment.model';
import { TopicStorageService } from './../../../services/topic-storage.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Topic } from '../../model/topic.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {
  constructor(private commentStorageService: CommentStorageService , private route: ActivatedRoute, private authService: AuthService) { }
  comments: Comment[] = [];
  getCommentSubscription: Subscription;
  addComment = true;
  private id;
  authenticated;
  authSubscription: Subscription;
  @ViewChild('textArea') textArea;
  ngOnInit() {
    this.getCommentSubscription = this.commentStorageService.getSpecificCommentSubject.subscribe(
      (comments: Comment[]) => {
        this.comments = comments;
      });
      this.route.params.subscribe((params: Params) => {
        this.id = params['id'];
        this.commentStorageService.getComments(+params['id']);
      });
    this.authenticated = this.authService.isAuthenticated();
    this.authSubscription = this.authService.authenticated.subscribe(
      (status) => { this.authenticated = status; }
    );
  }
  addCommentState() {
    console.log(this.textArea.nativeElement.value);
    this.comments.push(new Comment(this.textArea.nativeElement.value, this.authService.getUserName()));
    this.commentStorageService.addComment( this.id, this.comments);
  }
  ngOnDestroy() {
    this.getCommentSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

}
