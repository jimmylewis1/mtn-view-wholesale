import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ContactPage from '../Contact';
import ProductListPage from '../ProductListPage';
import ProductPage from '../ProductPage';
import Footer from '../Footer';

const App = () => (
  <Router>
      <div>
        <Navigation />

        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/about'} component={AboutPage} />
        <Route exact path={'/product-list'} component={ProductListPage} />
        <Route exact path={'/contact'} component={ContactPage} />
        <Route exact path= {'/product/:id'} component={ProductPage} />
        
        <Footer />

      </div>
  </Router>
);

export default App;
