import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TopicStorageService } from '../../services/topic-storage.service';
import { Topic } from '../../forum/model/topic.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private topicStorageService: TopicStorageService) { }
  imageSrc: string;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const topic = new Topic(form.value.topic, form.value.content, form.value.imagePath, []);
    this.topicStorageService.addTopic(topic);
  }

}
