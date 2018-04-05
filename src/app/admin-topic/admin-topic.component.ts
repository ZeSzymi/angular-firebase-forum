import { Topic } from './../forum/model/topic.model';
import { AdminTopicService } from './../services/admin-topic.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../forum/model/comment.model';

@Component({
  selector: 'app-admin-topic',
  templateUrl: './admin-topic.component.html',
  styleUrls: ['./admin-topic.component.css']
})
export class AdminTopicComponent implements OnInit {

  constructor(private adminTopicService: AdminTopicService) { }
  topics: Topic[] = [];
  ngOnInit() {
    this.adminTopicService.getTopics();
    this.adminTopicService.topicsSubject.subscribe(
      (topics) => this.topics = topics
    );
  }

}
