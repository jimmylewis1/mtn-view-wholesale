import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navigation } from '../Navigation';
import { MobileHeader } from '../mobile-header/mobile-header.component';
import { HomePage } from '../Home';
import { AboutPage } from '../About';
import { ContactPage } from '../Contact';
import { ProductListPage } from '../ProductListPage';
import { ProductPage } from '../ProductPage';
import { Footer } from '../Footer';

import { mainWrapper } from './app.styles';

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  const styles = {
    showMobileHeader: windowWidth < 768,
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions())
  });

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    setWindowWidth(windowWidth);
  };

  return(
    <Router>
      <div className={mainWrapper}>
      {styles.showMobileHeader ? (
          <MobileHeader />
        ): (
          <Navigation />
        )}

        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/about'} component={AboutPage} />
        <Route exact path={'/product-list'} component={ProductListPage} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path={'/product/:id'} component={ProductPage} />

        <Footer />

      </div>
    </Router>
  )
};

export default App;
