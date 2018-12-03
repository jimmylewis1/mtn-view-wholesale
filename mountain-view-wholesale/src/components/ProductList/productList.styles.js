import { css } from 'emotion';

export const productWrapper = css `
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 33%;
  margin-bottom: 3%;
  padding: 1%;
  label: product-wrapper;
`;

export const productListImage = css ` 
  width: 100%;
  cursor: pointer;
  label: product-list-image;
`;

export const productInfo = css `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  margin-top: 2%;
  label: product-info;

  h1 {
    margin: 0;
    cursor: pointer;
  }

  h4 {
    margin: .5em 0;
  }

`;

export const productDescription = css `
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  label: product-description;
`;
