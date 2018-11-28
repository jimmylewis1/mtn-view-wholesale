import React from 'react';
import productsList from '../../productsList';

import { productListImage, productWrapper, productInfo, productDescription } from './productList.styles';

const ProductList = () => (
  productsList.map((product, i) =>
  <div className={productWrapper} key={i}>
    <img className={productListImage} src={`${product.images[0]}`} alt="" />
    <div className={productInfo}>
      <h1>{product.title}</h1>
      <h4>${product.price}</h4>
      <div className={productDescription}>{product.description}</div>
    </div>
  </div>
  )
)

export default ProductList;
