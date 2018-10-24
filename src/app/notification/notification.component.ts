import { Component, OnInit, EventEmitter } from "@angular/core";
import { NotificationService } from "../shared/notification/notification.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  display: boolean = false;
  message: string;
  constructor(public notifier: NotificationService) {
    notifier.emitter.subscribe(data => {
      this.display = data.display,
      this.message = data.message
    })
  }

  removeMessage() {
    this.display = false
    this.message = ''
  }

  ngOnInit() {}
}
