import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';

import { navBar, navItem, logoImage } from './navigation.styles';
import TempLogo from '../../images/tempLogo.png';

const Navigation = () =>
  <Navbar collapseOnSelect className={navBar}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={{ pathname: '/' }}>
          <img className={logoImage} src={TempLogo} alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        <i>The better way to buy!</i>
      </Navbar.Text>
      <Nav pullRight>
        <NavItem className={navItem} eventKey={1} href="/">
          Home
      </NavItem>
        <NavItem className={navItem} eventKey={2} href="/about">
          About
      </NavItem>
        <NavItem className={navItem} eventKey={1} href="/product-list">
          Products
      </NavItem>
        <NavItem className={navItem} eventKey={2} href="/contact">
          Contact
      </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default Navigation;
