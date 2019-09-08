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

export const navWrapper = css`
  height: 100px;
  background-color: rgb(167, 167, 167, 60);
  border-bottom: 1px solid ${lightGrey};
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label: nav-wrapper;
`;

export const navBrand = css`

  label: nav-brand;
`;

export const navMenu = css`
  font-size: 15px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  label: nav-menu;

  a {
    color: ${darkGrey}; 
    margin: 0 10px;

    &:active {
      font-weight: bold;
    }
}
`;

export const navItem = css`
  margin: 0 5px;

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
