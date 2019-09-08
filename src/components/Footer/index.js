import React from 'react';

import { footerWrapper, contactEmail, contactPhone, contactAddress } from './footer.styles';
import { textBold } from '../../styles/generic.styles';

const Footer = () => (
  <div className={footerWrapper}>
    <div className={contactPhone}>© Mountain View Wholesale</div>
    <div className={contactAddress}>
      <span className={textBold}>Mountain View Wholesale</span><br />
      PO Box 415<br />
      Fairview, Utah, 84629
    </div>
    <div className={contactEmail}>
      <a href="mailto:email@domain.com">thor.grasteit@gmail.com</a>
    </div>
  </div>
);

export default Footer;
