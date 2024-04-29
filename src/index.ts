import { Messaging } from "./srp/messaging";
import { Order } from "./srp/order";
import { Persistency } from "./srp/persistence";
import { Product } from "./srp/product";
import { ShoppingCart } from "./srp/shopping-cart";

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