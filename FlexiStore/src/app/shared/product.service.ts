import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct, MainCategory } from './product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from "lodash";
import { OrderItem, Order } from './order';


@Injectable()
export class ProductService {
    constructor (private httpClient: HttpClient) {}

    public products: IProduct[] =[];
    public categories: MainCategory[] =[];
    public order: Order =new Order();

    public loadProducts(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>("/api/products")
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        //     .catch(this.handleError);
    }

    public getCategories(): Observable<MainCategory[]>{
      return this.httpClient.get<MainCategory[]>("/api/categories")
  }

    public getProduct(id: number): Observable<IProduct> {
      return  this.httpClient.get<IProduct>("/api/products/" + id);
  }

  public AddToOrder(product: IProduct) {

    let item: OrderItem = this.order.items.find(i => i.productId == product.id);

    if (item) {

      item.quantity++;

    } else {

      item = new OrderItem();
      item.productId = product.id;
      item.productTitle = product.title;
      item.productSize = product.size;
      item.unitPrice = product.price;
      item.quantity = 1;

      this.order.items.push(item);
    }
  }

private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}
}
