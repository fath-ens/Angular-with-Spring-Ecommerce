import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaCallbackComponent, OKTA_CONFIG, OktaAuthModule, OktaAuthGuard } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

const oktaConfig = myAppConfig.oidc;

const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes = [
  //order-history ekleme işlemi login deki hata çözümü sonrası açılacak ************** 
  //{path:'order-history', component: OrderHistoryComponent, canActivate:[OktaAuthGuard], data:{onAuthRequired: sendToLoginPage}},
  {path:'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'cart-details', component:CartDetailsComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'search/:keyword', component:ProductListComponent},
  {path:'category/:id', component:ProductListComponent},
  {path:'category', component:ProductListComponent},
  {path:'products', component:ProductListComponent},
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path:'**', redirectTo:'/products', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    OrderHistoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [ProductService, {provide: OKTA_CONFIG, useValue: {oktaAuth}},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }