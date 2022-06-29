// import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

import React from "react";
import { IProductItem, ProductType } from "../../model/data";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-slice";

export type IMainHeaderProps = {};

const MainHeader: React.FC<IMainHeaderProps> = () => {
  const dispatch = useDispatch();

  const preloadedProductChangeHandler = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    switch (value) {
      case "Set1":
        const p1set1: IProductItem = {
          imported: false,
          price: 12.49,
          qty: 2,
          type: ProductType.Book,
        };
        const p2set1: IProductItem = {
          imported: false,
          price: 14.99,
          qty: 1,
          type: ProductType["Music CD"],
        };
        const p3set1: IProductItem = {
          imported: false,
          price: 0.85,
          qty: 1,
          type: ProductType["Chocolate Bar"],
        };
        dispatch(productActions.addProductSet([p1set1, p2set1, p3set1]));
        break;
      case "Set2":
        const p1set2: IProductItem = {
          imported: true,
          price: 10.0,
          qty: 1,
          type: ProductType["Box of chocolates"],
        };
        const p2set2: IProductItem = {
          imported: true,
          price: 47.5,
          qty: 1,
          type: ProductType["Bottle of Perfume"],
        };
        dispatch(productActions.addProductSet([p1set2, p2set2]));
        break;
      case "Set3":
        const p1set3: IProductItem = {
          imported: true,
          price: 27.99,
          qty: 1,
          type: ProductType["Bottle of Perfume"],
        };
        const p2set3: IProductItem = {
          imported: false,
          price: 18.99,
          qty: 1,
          type: ProductType["Bottle of Perfume"],
        };
        const p3set3: IProductItem = {
          imported: false,
          price: 9.75,
          qty: 1,
          type: ProductType["Packet of headache pills"],
        };
        const p4set3: IProductItem = {
          imported: true,
          price: 11.25,
          qty: 3,
          type: ProductType["Box of chocolates"],
        };
        dispatch(productActions.addProductSet([p1set3, p2set3, p3set3, p4set3]));
        break;
    }
  };

  return (
    <header className={classes.header}>
      <h1>REVIVA TEST</h1>
      <nav>
        <ul>
          <li>
            <div style={{ display: "flex" }}>
              <h1>Preloaded</h1>
              <select id="type" onChange={preloadedProductChangeHandler}>
                <option value="Nothing">---</option>
                <option value="Set1">Excercise Input #1</option>
                <option value="Set2">Excercise Input #2</option>
                <option value="Set3">Excercise Input #3</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
