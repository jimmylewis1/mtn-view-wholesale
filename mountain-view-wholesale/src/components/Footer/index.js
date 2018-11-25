import React from 'react';

import { footerWrapper, contactEmail, contactPhone, contactAddress } from './footer.styles';
import { textBold } from '../../styles/generic.styles';

const Footer = () => (
  <div className={footerWrapper}>
    <div className={contactPhone}>888-888-8888</div>
    <div className={contactAddress}>
      <span className={textBold}>Mountain View Wholesale</span><br />
      123 Street Name Here<br />
      City, State, 84004
    </div>
    <div className={contactEmail}>
      <a href="mailto:email@domain.com">email@domain.com</a>
    </div>
  </div>
);

export default Footer;
