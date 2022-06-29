import { ProductType } from "../data";
import { TaxableProduct } from "./TaxableProduct";

interface IBaseProduct {
  calculateSalesTaxes(): number;
}

export class BaseProduct extends TaxableProduct implements IBaseProduct {
  type: ProductType;
  price: number;
  qty: number;

  constructor(
    type: ProductType,
    price: number,
    qty: number,
    salesTax: number,
    imported: boolean
  ) {
    super(salesTax, imported);
    this.type = type;
    this.price = price;
    this.qty = qty;
  }

  calculateSalesTaxes(): number {
    const amount = this.qty * this.price;
    const dutyTaxAmount = (amount * this.getDutyTaxPercentage()) / 100;
    const taxSalesAmount = (amount * this.getSalesTaxPercentage()) / 100;
    const totalTaxes = dutyTaxAmount + taxSalesAmount;
    const rounded = (Math.ceil(totalTaxes * 20) / 20).toFixed(2);
    return Number(rounded);
  }
}
