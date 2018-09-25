import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { DataTableModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthGuard } from './services/auth-guard.service';
import { FbUserService } from './services/fb-user.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { CategoryService } from './services/category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HomeComponent,
    BsNavbarComponent,
    ProductsComponent,
    CheckoutComponent,
    OrderComponent,
    OrderSuccessComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    LoginComponent,
    CheckOutComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckoutComponent, canActivate:[AuthGuard]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate:[AuthGuard]},
      {path: 'orders', component: OrderComponent, canActivate:[AuthGuard]},

      {path: 'admin/products/add', component: AddProductComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/products', component: ManageProductsComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'admin/orders', component: ManageOrdersComponent, canActivate:[AuthGuard, AdminAuthGuard]}
    ]),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
    // DataTableModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    FbUserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
