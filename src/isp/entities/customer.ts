import { IIndividualCustomer, IEnterpriseCustomer, ICustomer } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IIndividualCustomer, ICustomer {
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }
    getName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    getIDN(): string {
        return this.cpf;
    }

}
export class EnterpriseCustomer implements IEnterpriseCustomer, ICustomer {
    public name: string;
    public cnpj: string;

    constructor(name: string, cnpj: string) {
        this.cnpj = cnpj;
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    getIDN(): string {
        return this.cnpj;
    }
}