import { BaseProduct } from "./BaseProduct";

export class Chocolate extends BaseProduct {
    constructor(
        price: number,
        qty: number,
        imported: boolean,
      ) {
        super(price, qty, 0, imported);
      }
}