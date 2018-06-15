import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { ProductSnackComponent } from './products/product-snack/product-snack.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductService } from './shared/product.service';
import { AuthService } from './auth/auth.service';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartComponent } from './cart/cart/cart.component';
import { FooterComponent } from './navigation/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SideNavComponent,
    ProductSnackComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl },
                ProductService,
                AuthService],
  bootstrap: [AppComponent],
  entryComponents : [ProductSnackComponent,CartComponent]
})
export class AppModule {
}
  export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

