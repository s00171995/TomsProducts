import { Injectable } from "@angular/core";
import { IProduct } from "../../product-list/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  // needed this to push the current products to firestore using fakejson server - no longer needed
  private endpoint = "http://localhost:3000/products";
 
  productsCollection: AngularFirestoreCollection<IProduct>;
  products: Observable<IProduct[]>;
 
  // product array for fakejson server
  allProducts: IProduct[];
  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    //initializing the products collection based on the collection name in firestore
    this.productsCollection = _afs.collection<IProduct>("products");
  }

  //get all products from the database along with the document id's for each product 
  // getting doc ids so we can delete a product
  getProducts(): Observable<IProduct[]> {
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions =>
          actions.map(a => {
          const data = a.payload.doc.data() as IProduct;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.products;
  }

  // adding product will add it to that collection in the databse
  addProduct(product: IProduct): void {
    this.productsCollection.add(product);
  }

  // deleting items in the database by specifying the document id
  deleteProduct(id: string) {
    console.log(id);
    this.productsCollection
      .doc(id)
      .delete()
      .catch(error => {
        console.log("error :" + error);
      })
      .then(() => console.log("deleted Product id: " + id));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // add all products to the db using fakejson serve
  addAllProducts() {
    this._http.get<IProduct[]>(this.endpoint).subscribe(products => {
      this.allProducts = products;
      this.allProducts.forEach(product => {
        console.log("adding: " + product.productName);
        this.productsCollection.add(product);
      });
      error => (this.errorMessage = <any>error);
    });
  }
}
