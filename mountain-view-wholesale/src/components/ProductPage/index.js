import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import * as _ from 'lodash';

import arrowImg from '../../images/arrow.svg';

import { productWrapper, backWrapper, backBtn, 
  arrowSvg, imageCarouselWrapper, productImage, productInfoWrapper } from './productPage.styles';

import productsList from '../../productsList';

const ProductPage = (props) => {
  const productId = props.match.params.id;
  // lodash to find object with id
  const productData = _.find(productsList, { 'id': productId});
  console.log('data: ', productData.images[0]);
  return(
    <div>
      <div className={backWrapper}>
        <div className={backBtn}>
          <Link to={{ pathname: '/product-list' }}>
            <ReactSVG src={arrowImg} svgClassName={arrowSvg} />
            <span className="backText">Back to listings</span>
          </Link>
        </div>
      </div>
      <div className={productWrapper}>
        <div className={imageCarouselWrapper}>
          <img className={productImage} src="products/caseih7140/image00.jpg" alt="" />
        </div>
        <div className={productInfoWrapper}>
          <div>{productData.title}</div>
          <div>${productData.price}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
