import React from 'react';
import { Link } from 'react-router-dom';

import { navLinks, header, logoWrapper, logoImage } from './navigation.styles';
import TempLogo from '../../images/tempLogo.png';

const Navigation = () =>
  <div className={header}>
    <div className={logoWrapper}>
      <Link to={{ pathname: '/' }}>
        <img className={logoImage} src={TempLogo} alt="" />
      </Link>
    </div>
    <ul className={navLinks}>
      <li><Link to={{ pathname: '/' }}>Home</Link></li>
      <li><Link to={{ pathname: '/about' }}>About</Link></li>
      <li><Link to={{ pathname: '/product-list' }}>Products</Link></li>
      <li><Link to={{ pathname: '/contact' }}>Contact</Link></li>
    </ul>
  </div>

export default Navigation;