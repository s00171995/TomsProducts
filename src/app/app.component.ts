import { Component } from "@angular/core";
import { ProductService } from "../app/shared/product-service/product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ProductService]
})
export class AppComponent {
  title = "toms-products";
  constructor() {}
}
