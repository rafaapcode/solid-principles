type CartItem = { name: string; price: number };

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    private orderStatus: "open" | "closed" = "open";
    
    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }
 
    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    total(): number {
        return +this._items.reduce((prev, curr) => prev + curr.price,0).toFixed(2);
    }

    checkout():void {
        if(this.isEmpty()) {
            console.log("Seu carrinho está vazio");
            return;
        }

        this.orderStatus = 'closed';
        this.sendMessage("Seu pedido foi recebido");
        this.saveOrder();
        this.clear();
    }

    isEmpty():boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log(msg);
    }

    saveOrder(): void {
        console.log("Pedido salvo com sucesso !");
    }

    clear(): void {
        this._items.length = 0;
    }
}
