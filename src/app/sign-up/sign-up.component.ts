import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  pwd: string;
  name: string;
  description: string
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.name)
    console.log("You have signed up with ", this.email, " and ", this.pwd)
  }
}
