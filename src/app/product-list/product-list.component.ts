import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../shared/product-service/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private errorMessage: string;

  constructor(private _productService: ProductService) { }

  // Getter and Setter for private listbox filtering variable
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

  // show hide images
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // performing a filter on the list based on the name of the product
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  // event emmitter is being recieved here from the star rating component
  onNotify(message: string): void {
    console.log(message);
  }
  // deleting a product based on its document id in firestore
  delete(id: string) {
    console.log(id);
    this._productService.deleteProduct(id);
  }

  // on init get the list of products from the product service
  ngOnInit() {
    this._productService.getProducts().subscribe(products => {
      this.products = products,
      this.filteredProducts = this.products,
        error => (this.errorMessage = <any>error);
    });
  }
}
