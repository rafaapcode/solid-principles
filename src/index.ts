import { Messaging } from "./ocp/services/messaging";
import { Order } from "./ocp/entities/order";
import { Persistency } from "./ocp/services/persistence";
import { Product } from "./ocp/entities/product";
import { ShoppingCart } from "./ocp/entities/shopping-cart";
import { FifityPercentDiscount } from "./ocp/entities/discount";

const fiftyPercentDiscount = new FifityPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const msg = new Messaging();
const persist = new Persistency();
const order = new Order(shoppingCart, msg, persist);
shoppingCart.addItem(new Product("Shorts", 90));
shoppingCart.addItem(new Product("PS5", 5000));
shoppingCart.addItem(new Product("Iphone 15", 4550));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(shoppingCart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);