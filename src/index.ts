import { Messaging } from "./srp/services/messaging";
import { Order } from "./srp/entities/order";
import { Persistency } from "./srp/services/persistence";
import { Product } from "./srp/entities/product";
import { ShoppingCart } from "./srp/entities/shopping-cart";

const shoppingCart = new ShoppingCart();
const msg = new Messaging();
const persist = new Persistency();
const order = new Order(shoppingCart, msg, persist);
shoppingCart.addItem(new Product("Shorts", 90));
shoppingCart.addItem(new Product("PS5", 5000));
shoppingCart.addItem(new Product("Iphone 15", 4550));

console.log(shoppingCart.total());
console.log(shoppingCart.items);
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);