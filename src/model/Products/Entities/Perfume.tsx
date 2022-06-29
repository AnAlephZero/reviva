import { BaseProduct } from "./BaseProduct";

export class Perfume extends BaseProduct {
    constructor(
        price: number,
        qty: number,
        imported: boolean,
      ) {
        super(price, qty, 10, imported);
      }
}