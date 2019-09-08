import React from 'react';

import { pageTitle } from '../../styles/generic.styles';
import { storyWrapper, aboutStory, ownershipWrapper, ownerBio } from './about.styles';

import storyImage from '../../images/temp-image6.jpg';
import familyImage from '../../images/temp-image7.jpg';

const AboutPage = () => (
  <div>
    <div className={pageTitle}>
      <h1>About Us</h1>
    </div>
    <div className={storyWrapper}>
      <img src={storyImage} alt="" />
      <div className={aboutStory}>
        Mountain View Wholesale started in 2015 to provide an option for hard-working farmers and ranchers to have a reliable source for purchasing used equipment. When working with MVW, you can feel confident in knowing that no matter what your needs are—whether it’s buying, selling, or trade-ins, you will be treated fairly and with respect.
      </div>
    </div>
    <div className={ownershipWrapper}>
      <img src={familyImage} alt="" />
      <div className={ownerBio}>
        <h1>Thor Grasteit - Founder</h1>
        <div>
          Thor grew up on a farm in Fallon, Nevada. He’s the oldest of ten children. Growing up, he learned to work hard, be honest, and have integrity. He later moved to Utah where he lives now with his beautiful wife and six children. Thor has worked in the agricultural business for 20 years. He started out working for dealerships before deciding to start Mountain View Wholesale in 2015. Since then he has been committed to giving his customers the best experience possible - a better price, a better value, <i>a “better way to buy.”</i>
        </div>
      </div>
    </div>
  </div>

);

export default AboutPage;
