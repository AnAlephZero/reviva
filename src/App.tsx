import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import ProductList from './components/Products/ProductList';
import Products from './components/Products/Products';


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Products/>
        <ProductList />
        {/* <Output /> */}
      </Layout>
    </React.Fragment>
  );
}

export default App;
