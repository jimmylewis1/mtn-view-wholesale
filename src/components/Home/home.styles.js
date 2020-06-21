import { css } from 'emotion';
import { white } from '../../styles/colors';

import TractorHero from '../../images/tractor-hero.jpg';

const mainBackgroundImgUrl = 'https://i.imgur.com/rkhVwAh.jpg';
const anotherBackgroundImgUrl = 'https://i.imgur.com/YjGwanS.jpg';

export const homeHero = css`
  background-image: url('${anotherBackgroundImgUrl}');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 960px;
  display: flex;
  justify-content: center;
  label: home-hero;
`;

export const nameSloganWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 25em;
  label: name-slogan-wrapper;
`;

export const companyName = css`
  color: ${white};
  font-size: 8em;
  font-weight: bold;
  text-shadow: 5px 3px 3px #000;
  display: flex;
  justify-content: center;
  label: company-name;
`;

export const companySlogan = css`
  color: ${white};
  font-size: 2em;
  font-style: italic;
  text-shadow: 5px 3px 3px #000;
  label: company-slogan;
`;

export const middleWrapper = css`
  display: flex;
  margin: 5em;
  label: middle-wrapper;
`;

export const middleTextWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3em;
  max-width: 690px;
  label: middle-text-wrapper;
`;

export const middleText = css`

  label: middle-text;
`;

export const bottomWrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 5em;
  label: bottom-wrapper;
`;

// Begin media queries

css`@media screen and(max-width: 875px) {}`
