import { AuthService } from './auth.service';
import { Topic } from './../forum/model/topic.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Comment } from '../forum/model/comment.model';
import { Router } from '@angular/router';

@Injectable()
export class TopicStorageService {
    constructor(private http: Http, private authService: AuthService, private router: Router) {}
    getTopicsSubject: Subject<Topic[]> = new Subject<Topic[]>();
    getSpecificTopicSubject: Subject<Topic> = new Subject<Topic>();
    private topics: Topic[] = [/*
        new Topic('Topic',
        'Content content content...',
        'http://www.macdigger.ru/wp-content/uploads/
        2018/03/Fortnite2Fbattle-royale2FFNBR_BPS03_SocialShare-1200x628-7d7f12b72fe6b642b939063c6eae832562443007.jpg',
        [new Comment('this is comment', 'user')]),
        new Topic('Topic2',
        'Content2 content2 content2...',
        'http://www.macdigger.ru/wp-content/uploads/
        2018/03/Fortnite2Fbattle-royale2FFNBR_BPS03_SocialShare-1200x628-7d7f12b72fe6b642b939063c6eae832562443007.jpg',
    [new Comment('this is comment2', 'user2')]),*/
    ];
    private linkPut = 'https://forum-742d6.firebaseio.com/topics.json?auth=';
    private linkGet = 'https://forum-742d6.firebaseio.com/topics.json';
    getTopics() {
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                for (let i = 0; i < response.json().length; i++) {
                    this.topics[i] = new Topic(
                        response.json()[i].name,
                        response.json()[i].content,
                        response.json()[i].imagePath,
                        response.json()[i].comment
                    );
                    this.getTopicsSubject.next(this.topics);
                }
            }
        );
    }
    addTopic(topic: Topic) {
        let topics: Topic[];
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                response.json() == null ? topics = [] : topics = response.json();
                topics.push(topic);
                this.http.put(this.linkPut + this.authService.getTokenId(), topics).subscribe(
                    () => this.router.navigate(['/'])
                );
            }
        );
    }
    addTopics() {
        this.http.put(this.linkPut + this.authService.getTokenId(), this.topics).subscribe(
            (resopnse: Response) => console.log(resopnse)
        );
    }
    removeTopic(index: number) {
        this.http.get(this.linkGet + this.authService.getTokenId()).subscribe(
            (response: Response) => console.log(response.json())
        );
    }
    getTopic(index) {
        this.http.get(this.linkGet).subscribe(
            (response: Response) => {
                    const topic = new Topic(
                        response.json()[index].name,
                        response.json()[index].content,
                        response.json()[index].imagePath,
                        response.json()[index].comment);
                    this.getSpecificTopicSubject.next(topic);
            }
        );
    }
}
