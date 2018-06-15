import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';
import { CartComponent } from '../cart/cart/cart.component';
import { CheckoutComponent } from '../cart/checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'products/:id',component: ProductDetailComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
