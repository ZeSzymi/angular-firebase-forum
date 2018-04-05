import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.signUserIn(form.value.email, form.value.password);
  }

}
