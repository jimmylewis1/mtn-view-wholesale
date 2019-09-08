import React from 'react';
import { Link } from 'react-router-dom';

import { navWrapper, navItem, logoImage, navBrand, navMenu } from './navigation.styles';
import Logo from '../../images/logo-white.png';

const Navigation = () =>
  <div className={navWrapper}>
    <div className={navBrand}>
      <Link to={{ pathname: '/' }}>
        <img className={logoImage} src={Logo} width="300" height="150" alt="" />
      </Link>
    </div>
    <div className={navMenu}>
      <a href="/">
        <div className={navItem}>Home</div>
      </a>
      <a href="/about">
        <div className={navItem}>About</div>
      </a>
      <a href="/product-list">
        <div className={navItem}>Products</div>
      </a>
      <a href="/contact">
        <div className={navItem}>Contact</div>
      </a>
    </div>
  </div>

export default Navigation;
