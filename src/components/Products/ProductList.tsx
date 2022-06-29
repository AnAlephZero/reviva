import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { IProductItem, ProductType } from "../../model/data";
import { productSelector } from "../../store/product-slice";
import Card from "../Card/Card";
import styles from "./ProductList.module.css";

interface ProductListProps {}

const ProductList: FC<ProductListProps> = (props) => {
  const { items } = useSelector(productSelector);

  const formatProduct = (product: IProductItem) => {
    const value2write = `${product.qty} ${product.imported ? "Imported" : ""} ${
      ProductType[product.type]
    } at ${product.price.toFixed(2)}`;
    return value2write;
  };

  return (
    <Fragment>
      {items.length > 0 && (
        <Card className={styles.users}>
          <ul>
            <h3>Product List</h3>
            {items.map((product, index) => (
              <li key={index}>{formatProduct(product)}</li>
            ))}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default ProductList;
