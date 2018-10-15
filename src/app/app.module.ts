import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ConvertToSpaces } from "./shared/convert-to-spaces.pipe";
import { StarRatingComponent } from "./shared/star-rating/star-rating.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

import { RouterModule, Routes } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AddProductComponent } from "./add-product/add-product.component";
import { HttpClientModule } from "@angular/common/http";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";

import { environment } from "../environments/environment";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: ProductListComponent },
  { path: "add-product", component: AddProductComponent }
];

library.add(faStar);
library.add(faTrash);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarRatingComponent,
    NavBarComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
