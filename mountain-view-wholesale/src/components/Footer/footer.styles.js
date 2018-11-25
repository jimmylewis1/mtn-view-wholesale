import { css } from 'emotion';
import { lightGrey } from '../../styles/colors';

export const footerWrapper = css  `
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${lightGrey};
  padding: 10px 0 10px;
  width: 100%;
  label: footer-wrapper;
`;

export const contactEmail = css ` 

  label: contact-email;
`;

export const contactPhone = css `

  label: contact-phone;
`;

export const contactAddress = css `
  text-align: center;
  label: contact-address;
`;

