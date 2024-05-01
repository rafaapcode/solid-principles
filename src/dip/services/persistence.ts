import { PersistencyProtocol } from "../entities/interfaces/persistence-protocol";
export class Persistency implements PersistencyProtocol {
    saveOrder(): void {
        console.log("Pedido salvo com sucesso !");
    }
};