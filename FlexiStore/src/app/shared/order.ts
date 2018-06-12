import * as _ from "lodash";
import { User } from "../auth/user.model";

export class Order {
  orderId: number;
  orderDate: Date = new Date();
  orderNumber: string;
  items: Array<OrderItem> = new Array<OrderItem>();
  user: User;
  get subtotal(): number {
    return _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
  };

}

export class OrderItem {
  id: number;
  quantity: number;
  unitPrice: number;
  productId: number;
  productSize: string;
  productTitle: string;
}
