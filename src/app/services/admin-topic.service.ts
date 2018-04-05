import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Topic } from '../forum/model/topic.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminTopicService {
    constructor(private http: Http) {}
    private pathGet = 'http://localhost:3001/api/topics/show';
    private pathPost = 'http://localhost:3001/api/topics/add';
    adminTopics: Topic[] = [];
    topicsSubject = new Subject<Topic[]>();

    addTopic(topic: Topic) {
        this.http.get(this.pathGet).subscribe(
            (response: Response) => {
                this.adminTopics = response.json();
                this.adminTopics.push(topic);
                this.http.post(this.pathPost, this.adminTopics);
            }
        );
    }

    addTopics(topics: Topic[]) {
        console.log(topics);
        this.http.post(this.pathPost, topics).subscribe(
            (res) => console.log(res)
        );
    }

    removeTopic(index) {
        this.http.get(this.pathGet).subscribe(
            (response: Response) => {
                this.adminTopics = response.json();
                this.adminTopics.splice(index, 1);
                this.http.post(this.pathPost, this.adminTopics);
            }
        );
    }

    getTopics() {
        this.http.get(this.pathGet).subscribe(
            (response: Response) => {
                this.adminTopics = response.json();
                console.log(this.adminTopics);
                this.topicsSubject.next(this.adminTopics);
            }
        );
    }

}
