import { IProductItem, ProductType } from "../../data";
import { IBaseProduct } from "../Entities/BaseProduct";
import { Book } from "../Entities/Book";
import { Cd } from "../Entities/Cd";
import { Chocolate } from "../Entities/Chocolate";
import { Perfume } from "../Entities/Perfume";

export class ProductHelperFactory {
  build(item: IProductItem): IBaseProduct | null {
    switch (item.type) {
      case ProductType.Book:
        return new Book(item.price, item.qty, item.imported);
      case ProductType["Music CD"]:
        return new Cd(item.price, item.qty, item.imported);
      case ProductType["Chocolate Bar"]:
        case ProductType["Box of chocolates"]:
        return new Chocolate(item.price, item.qty, item.imported);
      case ProductType["Bottle of Perfume"]:
        return new Perfume(item.price, item.qty, item.imported);
      default:
        return null;
    }
  }
}
