import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  pageTitle = "Joes Products";
  isLoggedIn: boolean;
  constructor(public auth: AuthService, private router: Router) { }

  userLoggedIn() : boolean {
    this.isLoggedIn = this.auth.isLoggedIn()
    return this.isLoggedIn
  }
  onLogout() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn()
    this.router.navigate(['login'])
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn()
  }

}
