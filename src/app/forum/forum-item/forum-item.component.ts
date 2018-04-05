import { Comment } from './../model/comment.model';
import { Topic } from './../model/topic.model';
import { TopicStorageService } from './../../services/topic-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.css']
})
export class ForumItemComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private topicStorageService: TopicStorageService) { }
  topic: Topic = new Topic('', '', '', [new Comment('', '')]);
  getSpecificSubscription: Subscription;
  ngOnInit() {
    this.getSpecificSubscription = this.topicStorageService.getSpecificTopicSubject.subscribe(
      (response) => { this.topic = response; }
    );
    this.route.params.subscribe((params: Params) => {
      this.topicStorageService.getTopic(+params['id']);
    });
  }

  ngOnDestroy() {
    this.getSpecificSubscription.unsubscribe();
  }

}

