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
    'BOOK' , 'CD' , 'CHOCO_BOX' , 'PERFUME' , 'PILLS' , 'CHOCOLATE' }

