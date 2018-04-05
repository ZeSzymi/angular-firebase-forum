import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  isAuthenticated;
  ngOnInit() {
    this.authService.authenticated.subscribe((status) => { this.isAuthenticated = status; console.log(status); });
  }
  logOut() {
    this.authService.logUserOut();
  }

}
