import React from 'react';

import { pageTitle, textBold } from '../../styles/generic.styles';
import { contactInfoWrapper, contactInfo } from './contact-styles';

import contactImage from '../../images/temp-image8.jpg';

const ContactPage = () => (
  <div>
    <div className={pageTitle}>
      <h1>Contact / Inquiries</h1>
    </div>
    <div className={contactInfoWrapper}>
      <img src={contactImage} alt="" />
      <div className={contactInfo}>
        <span className={textBold}>Mountain View Wholesale</span>
        123 Street Name Here <br />
        City, State, 80001 <br />
        <br />
        (888) 555-5555
        <br />
        <br />
        <a href="mailto:email@domain.com">email@domain.com</a>
      </div>
    </div>
  </div>
);

export default ContactPage;
