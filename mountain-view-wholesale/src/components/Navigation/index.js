import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';

import { navBar, navItem, logoImage } from './navigation.styles';
import Logo from '../../images/logo-white.png';

const Navigation = () =>
  <Navbar collapseOnSelect className={navBar}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={{ pathname: '/' }}>
          <img className={logoImage} src={Logo} width="300" height="150" alt="" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
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
