import React from "react";
import { ProductType } from "../model/data";
import { ProductHelperFactory } from "../model/Products/Helper/ProductFactory";

describe("sales taxes", () => {
  it("should return 0 for not imported book", () => {
    const factory = new ProductHelperFactory();
    const theProduct = factory.build({
      imported: false,
      type: ProductType.Book,
      price: 10,
      qty: 1,
    });
    const taxes = theProduct?.calculateSalesTaxes();
    expect(taxes).toEqual(0);
  });

  it("should return 0.5 for 1 imported book that cost 10", () => {
    const factory = new ProductHelperFactory();
    const theProduct = factory.build({
      imported: true,
      type: ProductType.Book,
      price: 10,
      qty: 1,
    });
    const taxes = theProduct?.calculateSalesTaxes();
    expect(taxes).toEqual(0.5);
  });

  it("should return 1 for 1 not imported perfume that cost 10", () => {
    const factory = new ProductHelperFactory();
    const theProduct = factory.build({
      imported: false,
      type: ProductType["Bottle of Perfume"],
      price: 10,
      qty: 1,
    });
    const taxes = theProduct?.calculateSalesTaxes();
    expect(taxes).toEqual(1);
  });

  it("should return 1.5 for 1 imported perfume that cost 10", () => {
    const factory = new ProductHelperFactory();
    const theProduct = factory.build({
      imported: true,
      type: ProductType["Bottle of Perfume"],
      price: 10,
      qty: 1,
    });
    const taxes = theProduct?.calculateSalesTaxes();
    expect(taxes).toEqual(1.5);
  });

  it("should return X for 3 imported chocolate that cost 11.25", () => {
    const factory = new ProductHelperFactory();
    const theProduct = factory.build({
      imported: true,
      type: ProductType["Chocolate Bar"],
      price: 11.25,
      qty: 3,
    });
    const taxes = theProduct?.calculateSalesTaxes();
    expect(taxes?.toFixed(2)).toEqual("1.80");
  });
});
