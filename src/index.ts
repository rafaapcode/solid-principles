import { ShoppingCart } from "./srp/shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name: "Shorts", price: 90});
shoppingCart.addItem({name: "PS5", price: 5000});
shoppingCart.addItem({name: "Iphone 15", price: 5000});

console.log(shoppingCart.total());