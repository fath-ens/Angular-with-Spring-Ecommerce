import { Address } from "./address";
import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order-item";

export class Purchase {
    customer!: Customer;  // '!' işareti ile bu değişkenin kesinlikle atanmış olduğunu belirtiyoruz
    shippingAddress!: Address;
    billingAddress!: Address;
    order!: Order;
    orderItems!: OrderItem[];
}
