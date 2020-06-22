import React from 'react';
import { Link } from 'react-router-dom';

import { homeHero, nameSloganWrapper, 
  companyName, companySlogan, middleWrapper, 
  middleTextWrapper, middleText,
  bottomWrapper } from './home.styles';
import { actionButton } from '../../styles/generic.styles';

import middleImage from '../../images/temp-image2.jpg';
import bottomImage1 from '../../images/temp-image3.jpg';
import bottomImage2 from '../../images/temp-image4.jpg';
import bottomImage3 from '../../images/temp-image5.jpg';

export const HomePage = () => {
  return(
    <div>
      <div className={homeHero}>
        <div className={nameSloganWrapper} >
          <div className={companyName}>Mountain View <br /> Wholesale</div>
          <div className={companySlogan}>The better way to buy!</div>
        </div>
      </div>
      <div className={middleWrapper}>
        <img src={middleImage} alt="" />
        <div className={middleTextWrapper}>
          <div className={middleText}>
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
            Text goes here.Text goes here.Text goes here.Text goes here.
          </div>
          <Link to={{ pathname: '/product-list'}}>
            <div className={actionButton}>Browse Our Listings</div>
          </Link>
        </div>
      </div>
      <div className={bottomWrapper}>
      <img src={bottomImage1} alt="" />
      <img src={bottomImage2} alt="" />
      <img src={bottomImage3} alt="" />
      </div>
    </div>
  )
};
