import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import Products from './components/Products/Products';
import { IProductItem } from './model/data';


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Products onAddProducts={function (item: IProductItem): void {
          
        } } />
        {/* <Cart /> */}
      </Layout>
    </React.Fragment>
  );
}

export default App;
