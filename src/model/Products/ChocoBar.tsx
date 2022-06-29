import { ProductType } from "../data";
import { BaseProduct } from "./BaseProduct";

export class ChocoBar extends BaseProduct {
    constructor(
        price: number,
        qty: number,
        imported: boolean,
      ) {
        super(ProductType["Chocolate Bar"], price, qty, 0, imported);
      }
}