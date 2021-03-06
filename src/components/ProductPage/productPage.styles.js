import { css } from 'emotion';

export const productWrapper = css `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label: product-wrapper;
`;

export const backWrapper = css `
  margin-bottom: 3em;
  label: back-wrapper;
`;

export const backBtn = css `
a {
  display: flex;
  align-items: center;
}
  label: back-btn;
`;

export const arrowSvg = css `
  position: relative;
  top: 2px;
  // path {
  //   fill: red;
  // }
  label: arrow-svg;
`;

export const imageCarouselWrapper = css `

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  label: image-carousel-wrapper;
`;

export const productImage = css `

  label: product-image;
`;

export const productInfoWrapper = css `
  display: flex;
  flex-direction: column;
  max-width: 50%;
  label: product-info-wrapper;
`;

export const productTitle = css `
  font-size: 3em;
  font-weight: bold;
  label: product-title;
`;

export const productPrice = css `
  font-size: 2em;
  font-weight: bold;
  label: product-price;
`;

export const productDesc = css `
  margin-top: 2%;
  label: product-desc;
`;

export const backText = css `
  font-size: 18px;
  padding-left: 1em;
  label: back-text;
`;

