import { IProductItem, ProductType } from "../../data";
import { IBaseProduct } from "../Entities/BaseProduct";
import { FixedSalesTaxProduct } from "../Entities/FixedSalesProduct";
import { FreeSalesTaxProduct } from "../Entities/FreeSalesProduct";

export class ProductHelperFactory {
  build(item: IProductItem): IBaseProduct | null {
    switch (item.type) {
      case ProductType.Book:
      case ProductType["Box of chocolates"]:
      case ProductType["Chocolate Bar"]:
      case ProductType["Packet of headache pills"]:
        return new FreeSalesTaxProduct(item.price, item.qty, item.imported);
      case ProductType["Music CD"]:
      case ProductType["Bottle of Perfume"]:
        return new FixedSalesTaxProduct(item.price, item.qty, item.imported);
      default:
        return null;
    }
  }
}
