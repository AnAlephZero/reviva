import { TaxableProduct } from "./TaxableProduct";

export interface IBaseProduct {
  calculateSalesTaxes(): number;
  getNetPrice() : number;
}

export class BaseProduct extends TaxableProduct implements IBaseProduct {
  price: number;
  qty: number;

  constructor(
    price: number,
    qty: number,
    salesTax: number,
    imported: boolean
  ) {
    super(salesTax, imported);
    this.price = price;
    this.qty = qty;
  }
  
  getNetPrice(): number {
    return this.qty * this.price;
  }

  calculateSalesTaxes(): number {
    const amount = this.qty * this.price;
    console.log("Amount", amount)
    const dutyTaxAmount = (amount * this.getDutyTaxPercentage()) / 100;
    console.log("dutyTaxAmount", dutyTaxAmount)
    const taxSalesAmount = (amount * this.getSalesTaxPercentage()) / 100;
    console.log("taxSalesAmount", taxSalesAmount)
    const totalTaxes = dutyTaxAmount + taxSalesAmount;
    console.log("totalTaxes", totalTaxes)
    const rounded = (Math.ceil(totalTaxes * 20) / 20).toFixed(2);
    console.log("rounded", rounded)
    return Number(rounded);
  }
}
