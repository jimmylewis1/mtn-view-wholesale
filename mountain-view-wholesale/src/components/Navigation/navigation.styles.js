// Navigation styles
import { css } from 'emotion';
import { lightGrey, darkGrey, blue } from '../../styles/colors';

export const header = css  `
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightGrey};
  label: header;
`;

export const navLinks = css `
  width: 30%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  position: relative;
  top: 1em;
  label: nav-links;

  a {
    color: ${darkGrey};
    text-decoration: none;

    &:focus {
      color: ${blue};
      font-weight: bold;
    }
  }
`;

export const logoWrapper = css ` 
  margin-left: 2em;
  label: logo-wrapper;
`;

export const logoImage = css `
  width: 70%;
  label: logo-image;
`;
