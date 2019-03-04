// Navigation styles
import { css } from 'emotion';
import { lightGrey, darkGrey, blue } from '../../styles/colors';

export const header = css`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  label: header;
  `;

export const navBar = css`
  background-color: rgb(167, 167, 167, 60);
  border-bottom: 1px solid ${lightGrey};
  border-radius: 0px;
  label: navbar;
`;

export const navItem = css`
  a {
    color: ${darkGrey} !important; 
 
    &:focus {
          color: ${blue};
          font-weight: bold;
    }
  }
  label: nav-item;
`;

export const navLinks = css`
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

export const logoWrapper = css` 
  margin-left: 2em;
  label: logo-wrapper;
`;

export const logoImage = css`
  // width: 70%;
  label: logo-image;
`;
