export interface ICustomer {
    getName(): string;
    getIDN(): string;
}

export interface IIndividualCustomer {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface IEnterpriseCustomer {
    name: string;
    cnpj: string;
}
