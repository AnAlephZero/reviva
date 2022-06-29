import { FC, Fragment, useState } from "react";
import { IProductItem, ProductType } from "../../model/data";
import Card from "../Card/Card";
import Button from "../Layout/Button";
import styles from "./AddProduct.module.css";

interface AddProductProps {
  onAddProduct: (item: IProductItem) => void;
}

const AddProduct: FC<AddProductProps> = ({ onAddProduct }) => {
  const [type, setType] = useState<ProductType>(ProductType.Book);
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const [imported, setImported] = useState<boolean>(false);

  const addProductHandler = (event: any) => {
    event.preventDefault();

    const product = {
      type: type,
      price: price,
      imported: imported,
      qty: qty,
    };
    onAddProduct(product);

    setType(ProductType.Book);
    setPrice(0);
    setQty(1);
    setImported(false);
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

  return (
    <Fragment>
      <Card className={styles.input}>
        <form onSubmit={addProductHandler}>
          <div className={styles.line}>
            <label htmlFor="type">Type</label>
            <select
              id="type"
              className={styles.productType}
              onChange={typeChangeHandler}
              value={type}
            >
              {Object.keys(ProductType)
                .filter((v) => !isNaN(Number(v)))
                .map((key) => (
                  <option key={key} value={key}>
                    {ProductType[Number(key)]}
                  </option>
                ))}
            </select>

            <label htmlFor="imported">Imported?</label>
            <input
              id="imported"
              type="checkbox"
              min={1}
              checked={imported}
              onChange={importedChangeHandler}
            ></input>
          </div>

          <div className={styles.line}>
            <label htmlFor="qty">Qty</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={qty}
              onChange={qtyChangeHandler}
            ></input>

            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="number"
              min={0}
              onChange={priceChangeHandler}
              value={price}
              step=".01"
            ></input>
          </div>

          <Button className={styles.submit} type="submit">
            Add Product
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddProduct;
