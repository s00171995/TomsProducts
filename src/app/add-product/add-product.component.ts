import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IProduct } from "../product-list/product";
import { ProductService } from "../shared/product-service/product.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  pageTitle = "Add a product";
  constructor(private _productService: ProductService) {}

  private product: IProduct;

  ngOnInit() {}

  onAdd(id, name, code, releaseDate, description, price, rating, img): void {
    this.product = {
      productId: id,
      description: description,
      productName: name,
      productCode: code,
      releaseDate: releaseDate,
      price: price,
      starRating: rating,
      imageUrl: img
    };
    console.log(this.product);
    this._productService.addProduct(this.product);
  }
}
