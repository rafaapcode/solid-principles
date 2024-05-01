export abstract class Discount {
    protected discount: number = 0;

    calculate(value: number): number {
        return value - value * this.discount;
    }
}

export class FifityPercentDiscount extends Discount {
    protected discount: number = 0.5;
}