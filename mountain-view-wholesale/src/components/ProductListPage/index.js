import React from 'react';

import ProductList from '../ProductList';
import { productListWrapper } from './productListPage.styles';
import { pageTitle } from '../../styles/generic.styles';

const ProductListPage = () => (
  <div>
    <div className={pageTitle}>
      <h1>Equipment For Sale</h1>
    </div>
    <div className={productListWrapper}>
      <ProductList></ProductList>
    </div>
  </div>
)

export default ProductListPage;