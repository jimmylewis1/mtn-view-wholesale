import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import * as _ from 'lodash';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import arrowImg from '../../images/arrow.svg';
import { ModalComponent } from '../Modal';

import { productWrapper, backWrapper, backBtn, 
  arrowSvg, imageCarouselWrapper, productInfoWrapper,
  productTitle, productPrice, productDesc, backText } from './productPage.styles';
import { wrapper } from '../../styles/generic.styles';

import productsList from '../../productsList';

export const ProductPage = (props) => {
  const productId = props.match.params.id;
  const productData = _.find(productsList, { 'id': productId});
  const product = productData;

  return(
    <div className={wrapper}>
      <div className={backWrapper}>
        <div className={backBtn}>
          <Link to={{ pathname: '/product-list' }}>
            <ReactSVG src={arrowImg} svgClassName={arrowSvg} />
            <span className={backText}>Back to listings</span>
          </Link>
        </div>
      </div>
      {/* TODO: Bootstap productWrapper to optimize for mobile. */}
      <div className={productWrapper}>
      <div className={imageCarouselWrapper}>
        <Carousel>
          <div>
            {/* Images need to be the same height and width. */}
            <img src={`../${product.images[0]}`} alt= "" />
          </div>
          <div>
            <img src={`../${product.images[1]}`} alt= "" />
          </div>
          <div>
            <img src={`../${product.images[2]}`} alt= "" />
          </div>
          <div>
            <img src={`../${product.images[3]}`} alt= "" />
          </div>
          <div>
            <img src={`../${product.images[4]}`} alt= "" />
          </div>
          <div>
            <img src={`../${product.images[5]}`} alt= "" />
          </div>
        </Carousel>
      </div>
        <div className={productInfoWrapper}>
          <div className={productTitle}>{productData.title}</div>
          <div className={productPrice}>${productData.price}</div>
          <div className={productDesc}>{productData.description}</div>
          <ModalComponent />
        </div>
      </div>
    </div>
  )
};
