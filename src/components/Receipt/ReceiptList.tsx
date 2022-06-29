import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { IProductItem, ProductType } from "../../model/data";
import { ProductHelperFactory } from "../../model/Products/Helper/ProductFactory";
import { productSelector } from "../../store/product-slice";
import Card from "../Card/Card";
import styles from "./ReceiptList.module.css";

interface ReceiptListProps {}

const ReceiptList: FC<ReceiptListProps> = (props) => {
  const factory = new ProductHelperFactory();

  const { items } = useSelector(productSelector);

  let saleTaxes: number = 0;
  let total: number = 0;

  const formatProduct = (product: IProductItem) => {
    const theProduct = factory.build(product);
    if (theProduct) {
      const taxes = theProduct.calculateSalesTaxes();
      const fullPrice = theProduct.getNetPrice() + taxes;
      
      total = total + fullPrice;
      saleTaxes = saleTaxes + taxes;

      const value2write = `${product.qty} ${
        product.imported ? "Imported" : ""
      } ${ProductType[product.type]}: ${fullPrice.toFixed(2)}`;
      return value2write;
    }
  };

  return (
    <Fragment>
      {items.length > 0 && (
        <Card className={styles.users}>
          <ul>
            <h3>Receipt Details</h3>
            {items.map((product, index) => (
              <li key={index}>{formatProduct(product)}</li>
            ))}
            <div>Sales Taxes: {saleTaxes.toFixed(2)}</div>
            <div>Total: {total.toFixed(2)}</div>
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default ReceiptList;
