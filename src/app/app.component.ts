import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC2n70iBA8iyyowjZcyBwtHLNm9AhmXdj4',
      authDomain: 'forum-742d6.firebaseapp.com'
    });
  }
}
