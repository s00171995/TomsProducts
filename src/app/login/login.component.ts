import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  form;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit() {
  }

  login() {
    this.auth.doLogin(this.form.value)
    .then(res => {
      console.log(res)
      this.router.navigate(['product-list'])
    }, err => {
      console.log(err)
      this.errorMessage = err.message
    })
  }

  loginWithGoogle() {
    this.auth.doGoogleLogin()
    .then(() => {
      this.router.navigate(['product-list'])
    })
  }

}
