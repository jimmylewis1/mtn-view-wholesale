import { css } from 'emotion';

export const headerWrapper = css`
  label: headerWrapper;
  /* width: 100%; */
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: rgb(167, 167, 167, 60);
  opacity: .9;
  a {
    padding: 0 8px;
    text-decoration: none;
  }

  svg {
    path {
      fill: white;
    }
  }
`;

export const navigationWrapper = css`
  label: navigationWrapper;
  position: absolute;
  z-index: 1;
  min-height: 300px;
  width: 100%;
  background: rgb(167, 167, 167, 60);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nameWrapper = css`
  label: nameWrapper;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    margin-right: 16px;
  }
`;

export const link = css`
  label: link;
  height: 50px;
  color: white;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const name = css`
  label: name;
  color: white;
  font-size: 21px;
`;
