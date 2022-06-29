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
    const amount = this.price;
    const dutyTaxAmount = (amount * this.getDutyTaxPercentage()) / 100;
    const taxSalesAmount = (amount * this.getSalesTaxPercentage()) / 100;
    const totalTaxes = dutyTaxAmount + taxSalesAmount;
    const rounded = (Math.ceil(totalTaxes * 20) / 20).toFixed(2);
    const totalRounded = Number(rounded) * this.qty;
    return Number(totalRounded);
  }
}
