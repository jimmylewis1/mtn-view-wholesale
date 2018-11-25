import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { navLinks, header, logoWrapper, logoImage } from './navigation.styles';
import TempLogo from '../../images/tempLogo.png';

const Navigation = () =>
  <div className={header}>
    <div className={logoWrapper}>
      <Link to={ROUTES.HOME}>
        <img className={logoImage} src={TempLogo} alt="" />
      </Link>
    </div>
    <ul className={navLinks}>
      <li><Link to={ROUTES.HOME}>Home</Link></li>
      <li><Link to={ROUTES.ABOUT}>About</Link></li>
      <li><Link to={ROUTES.PRODUCT_LIST}>Products</Link></li>
      <li><Link to={ROUTES.CONTACT}>Contact</Link></li>
    </ul>
  </div>

export default Navigation;