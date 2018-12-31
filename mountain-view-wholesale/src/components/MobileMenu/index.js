import React from 'react';
import { Link } from 'react-router-dom';

import { navLinksMobile } from './mobileMenu.styles';

const MobileMenu = () => (
  <div>
    <ul className={navLinksMobile}>
      <li><Link to={{ pathname: '/' }}>Home</Link></li>
      <li><Link to={{ pathname: '/about' }}>About</Link></li>
      <li><Link to={{ pathname: '/product-list' }}>Products</Link></li>
      <li><Link to={{ pathname: '/contact' }}>Contact</Link></li>
    </ul>
  </div>
)

export default MobileMenu;
