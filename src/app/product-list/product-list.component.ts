import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../shared/product-service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Joe's Products";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private errorMessage = "";

  constructor(private _productService: ProductService) {
    this.filteredProducts = this.products;
    // this._productService.addAllProducts();
  }

  //do
  // add-product component - form to add new product - use url for image
  // add-product to array
  // routing/navigation 3 pages 3 ProductList - AddProduct - PageNotFound

  _listboxFilter: string;
  get listboxFilter(): string {
    return this._listboxFilter;
  }
  set listboxFilter(value: string) {
    this._listboxFilter = value;
    this.filteredProducts = this.listboxFilter
      ? this.performFilter(this.listboxFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  onNotify(message: string): void {
    console.log(message);
  }
  delete(id: string) {
    console.log(id);
    this._productService.deleteProduct(id);
  }
  ngOnInit() {
    this._productService.getProducts().subscribe(products => {
      (this.products = products),
        (this.filteredProducts = products),
        error => (this.errorMessage = <any>error);
    });
  }
}
