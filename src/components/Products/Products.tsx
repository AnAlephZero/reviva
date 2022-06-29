import { FC, Fragment, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IProductItem } from "../../model/data";
import { productActions } from "../../store/product-slice";
import Button from "../Layout/Button";
import AddProduct from "./AddProduct";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = (props) => {
  const dispatch = useDispatch();

  const handleOnAddProducts = useCallback(
    (item: IProductItem) => {
      console.log("New Product added: ", item);

      dispatch(productActions.addItemToProducts(item));
    },
    [dispatch]
  );

  const handleOnClearProducts = () => {
    dispatch(productActions.clearProducts());
  };

  const handlePrintDetails = () => {};

  return (
    <Fragment>
      <AddProduct onAddProduct={handleOnAddProducts}></AddProduct>
      <div className={styles.userAction}>
        <Button onClick={handleOnClearProducts}>Clear Product List</Button>
        <Button onClick={handlePrintDetails}>Print Receipt Details</Button>
      </div>
    </Fragment>
  );
};

export default Products;
