import { css } from 'emotion';
import { white } from '../../styles/colors';

import TractorHero from '../../images/tractor-hero.jpg';

export const homeHero = css`
  background-image: url('${TractorHero}');
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
  label: name-slogan-wrapper;
`;

export const companyName = css`
  color: ${white};
  font-size: 8em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  label: company-name;
`;

export const companySlogan = css`
  color: ${white};
  font-size: 2em;
  font-style: italic;
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
