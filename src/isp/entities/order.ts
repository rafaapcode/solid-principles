import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistence";
import { ShoppingCart } from "./shopping-cart";
import { ICustomer } from "./interfaces/customer-protocol";

export class Order {
    private _orderStatus: OrderStatus = "open";

    // Injeções de Dependências
    // Devem ser abstrações e não classes concretas
    constructor(private readonly cart: ShoppingCart, private readonly message: Messaging, private readonly persistence: Persistency, private readonly customer: ICustomer) {}

    get orderStatus(): Readonly<OrderStatus> {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }

        this._orderStatus = 'closed';
        this.message.sendMessage("Seu pedido foi recebido");
        this.persistence.saveOrder();
        this.cart.clear();
    }
}