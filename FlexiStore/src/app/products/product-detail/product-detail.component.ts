import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { ProductSnackComponent } from '../product-snack/product-snack.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    console.log (this._route);
    const param = this._route.snapshot.paramMap.get('id');

    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => {this.product = product},
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  AddToCart(){
    this.openSnackBar();
  }

  openSnackBar() {
   this.snackBar.openFromComponent(ProductSnackComponent, {
     duration: 500,
   });
 }

}

