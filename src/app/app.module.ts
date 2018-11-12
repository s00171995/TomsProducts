import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';

import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuard } from './shared/auth/auth.guard';

import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';
import { DisplayClipartComponent } from './display-clipart/display-clipart.component';

import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard] },
  { path: 'home', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', redirectTo: "login", canActivate: [AuthGuard] }
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
    AddProductComponent,
    NotificationComponent,
    SignUpComponent,
    LoginComponent,
    DisplayClipartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy } , AuthGuard, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule {}
