import React from 'react';

import SearchApp from '../Search';

import ProductList from '../ProductList';
import { productListWrapper } from './productListPage.styles';
import { pageTitle, searchBar } from '../../styles/generic.styles';

const ProductListPage = () => (
  <div>
    <div className={pageTitle}>
      <h1>Equipment For Sale</h1>
      <SearchApp></SearchApp>
    </div>
    <div className={productListWrapper}>
      <ProductList></ProductList>
    </div>
  </div>
)

export default ProductListPage;
