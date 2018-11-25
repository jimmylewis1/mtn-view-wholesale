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
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
      </div>
    </div>
    <div className={ownershipWrapper}>
      <img src={familyImage} alt="" />
      <div className={ownerBio}>
        <h1>Thor Grasteit - Founder</h1>
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
        Text goes here.Text goes here.Text goes here.Text goes here.
      </div>
    </div>
  </div>
);

export default AboutPage;
