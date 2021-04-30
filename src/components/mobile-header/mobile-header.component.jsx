import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as MenuIcon} from '../../images/menu-icon.svg';
import * as styles from './mobile-header.styles';


export const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return(
    <>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <div className={styles.nameWrapper}>
            <img src="../../../images/logo-white.png" alt=""/>
          </div>
        </Link>
        <MenuIcon onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && 
        <div className={styles.navigationWrapper}>
          <Link className={styles.link} to="/" onClick={() => setShowMenu(false)}>Home</Link>
          <Link className={styles.link} to="/about" onClick={() => setShowMenu(false)}>About</Link>
          <Link className={styles.link} to="/products" onClick={() => setShowMenu(false)}>Products</Link>
          <Link className={styles.link} to="/contact" onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
      }
      
    </>
  )
}