import { ProductType } from "../data";
import { BaseProduct } from "./BaseProduct";

export class Cd extends BaseProduct {
    constructor(
        price: number,
        qty: number,
        imported: boolean,
      ) {
        super(ProductType["Music CD"], price, qty, 10, imported);
      }
}