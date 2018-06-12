import { Component, OnInit } from '@angular/core';
import { IProduct, MainCategory } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { MatSnackBar} from '@angular/material';
import { ProductSnackComponent } from './product-snack/product-snack.component';
import * as _ from "lodash";

@Component({
    selector: 'store-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    pageTitle: string = 'Product List';
    errorMessage: string ="";
    _listFilter: string="";
    catFilter: string="";

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        if(value =="" && this.catFilter !=""){
          this.changeCategory(this.catFilter);
        }
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) :
                                  this.catFilter? this.temp:this.products;
    }



    filteredProducts: IProduct[] =[];
    products:IProduct[] = [];
    temp:IProduct[] =[];
    categories: MainCategory[] = [];

    constructor(private _productService:ProductService,public snackBar: MatSnackBar) {
     }

     performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        this.temp = this.catFilter == "" ? this.products:this.temp;

        return this.temp.filter((product: IProduct) =>
              product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._productService.loadProducts()
        .subscribe(res => {
            this.products = res;
            this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);

        this._productService.getCategories()
        .subscribe(res => {
            this.categories = res;
            },
            error => this.errorMessage = <any>error);
     }

     AddToCart(product:IProduct){
       this._productService.AddToOrder(product);
       this.openSnackBar();
     }

     openSnackBar() {
      this.snackBar.openFromComponent(ProductSnackComponent, {
        duration: 500,
      });
    }

    changeCategory(name: any){
      this.catFilter = name;
      this.filteredProducts = _.filter(this.products,["mainCategory.name",name]);
      this.temp = this.filteredProducts;
    }
}
