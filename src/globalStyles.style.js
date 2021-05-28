import { createGlobalStyle } from 'styled-components';

/*
  font-weight: 300 | 400 | 500 | 700
*/

/*
  SCREEN SIZES
*/

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '1024px',
  ipad: '768px',
  laptop: '1024px',
  laptopL: '1330px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.laptop})`,
  mobileM: `(max-width: ${size.ipad})`,
  ipad: `(max-width: ${size.laptop})`,
  mobileL: `(max-width: ${size.ipad})`,
  tablet: `(max-width: ${size.laptop})`,
  laptop: `(max-width: ${size.desktop})`,
  laptopL: `(max-width: ${size.desktop})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;