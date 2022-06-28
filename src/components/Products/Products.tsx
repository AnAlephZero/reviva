import { FC, Fragment, useEffect, useState } from "react";
import { IProductItem, ProductType } from "../../model/data";
import Card from "../Card/Card";
import Button from "../Layout/Button";
import styles from "./Products.module.css";

interface ProductsProps {
  onAddProducts: (item: IProductItem) => void;
}

const Products: FC<ProductsProps> = ({ onAddProducts }) => {
  const [type, setType] = useState<ProductType>(ProductType.BOOK);
  const [price, setPrice] = useState<number>(1);
  const [qty, setQty] = useState<number>(1);
  const [imported, setImported] = useState<boolean>(false);

  const addProductHandler = (event: any) => {
    event.preventDefault();
  };

  const typeChangeHandler = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    setType(Number(value));
  };

  const priceChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setPrice(Number(value));
  };

  const qtyChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setQty(Number(value));
  };

  const importedChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.checked;
    setImported(value);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      const product = {
        type: type,
        price: price,
        imported: imported,
        qty: qty,
      };

      onAddProducts(product);

      console.log("onAddProducts: ", product);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [onAddProducts, imported, price, qty, type]);

  return (
    <Fragment>
      <Card className={styles.input}>
        <form onSubmit={addProductHandler}>
          <label htmlFor="type">Product Type</label>
          <select id="type" onChange={typeChangeHandler} value={type}>
            {Object.keys(ProductType)
              .filter((v) => !isNaN(Number(v)))
              .map((key) => (
                <option key={key} value={key}>
                  {ProductType[Number(key)]}
                </option>
              ))}
          </select>

          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            min={0}
            onChange={priceChangeHandler}
            value={price}
            step=".01"
          ></input>

          <label htmlFor="qty">Qty</label>
          <input
            id="qty"
            type="number"
            min={1}
            value={qty}
            onChange={qtyChangeHandler}
          ></input>

          <label htmlFor="imported">Imported?</label>
          <input
            id="imported"
            type="checkbox"
            min={1}
            checked={imported}
            onChange={importedChangeHandler}
          ></input>

          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Products;
