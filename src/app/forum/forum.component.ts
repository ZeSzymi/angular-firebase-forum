import { TopicStorageService } from './../services/topic-storage.service';
import { Topic } from './model/topic.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private topicStorageService: TopicStorageService) { }

  topics: Topic[] = [];

  ngOnInit() {
    this.topicStorageService.getTopicsSubject.subscribe((response) => {
      this.topics = response;
    });
    this.topicStorageService.getTopics();
  }

}
