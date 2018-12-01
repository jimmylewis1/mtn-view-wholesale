import { css } from 'emotion';
import { lightGrey, white, blue } from '../styles/colors';

export const textBold = css  `
  font-weight: bold;
  label: text-bold;
`;

export const pageTitle = css `
  margin: 3em 0 0 5em;
  display: flex;
  justify-content: space-between;
  label: page-title;
`;

export const searchBar = css `
  height: 2em;
  width: 20em;
  margin: 2em 8em 0 0;
  border: 1px solid ${lightGrey};
  border-radius: 6px;
  padding-left: 5px;
  label: search-bar;

  ::-webkit-input-placeholder {
    padding-left: 3px;
  }
`;

export const wrapper = css `
  margin: 3em 5em;
  label: wrapper;
`;

export const actionButton = css `
  font-size: 18px;
  height: 50px;
  width: 300px;
  border: none;
  color: ${white};
  background-color: ${blue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 25px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
  label: browse-button;
`;
