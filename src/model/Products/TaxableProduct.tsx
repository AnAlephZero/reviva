interface ITaxable {
    getSalesTaxPercentage(): number;
    getDutyTaxPercentage(): number;
}

export class TaxableProduct implements ITaxable {
    readonly salesTax: number = 0;
    readonly dutyTax: number = 0;

    constructor(salesTax: number, imported: boolean) {
        this.salesTax = salesTax;
        this.dutyTax = imported ? 10 : 0;
    }
    getSalesTaxPercentage(): number {
        return this.salesTax;
    }
    getDutyTaxPercentage(): number {
        return this.dutyTax;
    }
}