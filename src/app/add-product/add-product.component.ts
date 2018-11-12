import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IProduct } from "../product-list/product";
import { ProductService } from "../shared/product-service/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  pageTitle = "Add a product";
  showDisplayComponent: boolean;
  imgUrl:string;
  constructor(private _productService: ProductService, private router: Router) {}

  private product: IProduct;

  ngOnInit() {}

  showHideComponent() : boolean {
    this.showDisplayComponent =!this.showDisplayComponent
    return false;
  }
  addImageToInput(evt) : boolean {
    console.log(evt)
    this.imgUrl = evt
    console.log(this.imgUrl)
    return false
  }

  onAdd(id, name, code, releaseDate, description, price, rating, img): void {
    this.product = {
      productId: id,
      description: description,
      productName: name,
      productCode: code,
      releaseDate: releaseDate,
      price: price,
      starRating: rating,
      imageUrl: this.imgUrl
    };
    console.log(this.product);
    this._productService.addProduct(this.product);
    this.router.navigate(['product-list'])
  }
}
