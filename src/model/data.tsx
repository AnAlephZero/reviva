export interface IProductItem {
  type: ProductType;
  price: number;
  imported: boolean;
  qty: number;
}

export interface WithId {
  id: string;
}

export interface IProductItemWithId extends IProductItem, WithId {}

export enum ProductType {
  "Book",
  "Music CD",
  "Box of chocolates",
  "Bottle of Perfume",
  "Packet of headache pills",
  "Chocolate Bar",
}

export interface TProductState {
  items: IProductItem[];
}
