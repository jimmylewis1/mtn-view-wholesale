import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import AboutPage from '../About';
import ContactPage from '../Contact';
import ProductListPage from '../ProductListPage';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
      <div>
        <Navigation />

        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ABOUT} component={AboutPage} />
        <Route exact path={ROUTES.PRODUCT_LIST} component={ProductListPage} />
        <Route exact path={ROUTES.CONTACT} component={ContactPage} />
        
        <Footer />

      </div>
  </Router>
);

export default App;
