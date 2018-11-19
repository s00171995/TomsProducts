import { Component, OnInit } from "@angular/core";
import { AuthService } from "../shared/auth/auth.service";
import { Router } from "@angular/router";
import { auth } from "firebase";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) {}

  // log out by calling auth service
  onLogout() {
    this.auth.doLogout();
    this.router.navigate(["login"]);
  }

  ngOnInit() {}
}
