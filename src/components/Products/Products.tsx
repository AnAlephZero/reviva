import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IProductItem } from "../../model/data";
import { productActions } from "../../store/product-slice";
import AddProduct from "./AddProduct";

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
  }

  return <AddProduct onAddProduct={handleOnAddProducts} onClear={handleOnClearProducts}></AddProduct>;
};

export default Products;
