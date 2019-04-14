import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private router: Router, private http: Http) {}
    private token: Token = null;
    private userName: string;
    authenticated: Subject<boolean> = new Subject<boolean>();

    signUserIn(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            (error) => { console.log(error); }
        ).then(
            (success) => { this.router.navigate(['/login']); }
        );
    }

    /*storeUserName(userName) {
        http.post('https://forum-742d6.firebaseio.com/topics.json');
    }*/

    logUserIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(
            (error) => { console.log(error); }
        ).then(
            () => { this.getToken(); this.userName = email; this.router.navigate(['/']); }
        );
    }

    logUserOut() {
        firebase.auth().signOut();
        this.token = null;
        this.onAuthenticationChange();
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: Token) => {
                this.token = token;
                this.onAuthenticationChange();
            }
        );
    }

    getUserName() {
        return this.userName;
    }
    onAuthenticationChange() {
        this.authenticated.next(this.isAuthenticated());
    }
    getTokenId() {
        return this.token;
    }
    isAuthenticated(): boolean {
        if (this.token == null) {
            return false;
        } else {
            return true;
        }
    }
}
