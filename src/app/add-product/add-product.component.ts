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
  imageStr:string;
  imgUrl:string;
  
  constructor(private _productService: ProductService, private router: Router) {}

  private product: IProduct;

  ngOnInit() {}

  // show / hide search results
  showHideComponent() : boolean {
    this.showDisplayComponent =!this.showDisplayComponent
    return false;
  }

  //Receiving the event emmitter and assigning it to a varaible
  addImageToInput($evt)  {
    console.log('Event from add product component', $evt)
    this.imgUrl = $evt
  }

  //passing in the parameters needed for creating a product
  // I could have used [(ngModel)] but this works too
  onAdd(id, name, code, releaseDate, description, price, rating): void {
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
