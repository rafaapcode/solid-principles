import { OrderStatus } from "./interfaces/order-status";
import { ICustomer } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistence-protocol";

export class Order {
    private _orderStatus: OrderStatus = "open";

    // Injeções de Dependências
    // Devem ser abstrações e não classes concretas
    constructor(private readonly cart: ShoppingCartProtocol, private readonly message: MessagingProtocol, private readonly persistence: PersistencyProtocol, private readonly customer: ICustomer) {}

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