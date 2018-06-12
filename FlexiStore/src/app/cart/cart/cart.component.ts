import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public data:ProductService, private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  onCheckout() {
    if (this.auth.getUser()) {
       // Go to checkout
       this.router.navigate(["checkout"]);
    } else {
      // Force Login
      this.router.navigate(["login"]);
    }
  }

}
