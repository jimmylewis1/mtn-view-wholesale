import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import productsList from '../../productsList';

import { productListImage, productWrapper, productInfo, productDescription } from './productList.styles';

class ProductList extends Component {

  render() {
    return (
      productsList.map((product, i) =>
      <div className={productWrapper} key={i}>
        <Link to={{ pathname: `/product/${product.id}`, state: product}}>
          <img className={productListImage} src={`${product.images[0]}`} alt="" />
        </Link>
        <div className={productInfo}>
          <h1 onClick={this.goToProduct}>{product.title}</h1>
          <h4>${product.price}</h4>
          <div className={productDescription}>{product.description}</div>
        </div>
      </div>
      )
    )
  }
} 

export default ProductList;
