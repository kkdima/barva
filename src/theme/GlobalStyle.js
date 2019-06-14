import { createGlobalStyle } from 'styled-components';

export const size = {
    mobile: '0px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '2560px',
    ThirdSectionImageSize: '512px'
};

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,

    ThirdSectionImageSize: `(min-width: ${size.ThirdSectionImageSize})`
};

export const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Chivo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'Chivo', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Chivo');
  }
  button, a {
    cursor: pointer;
    outline: none;
  }
  h1 {
    color: pink;
  }
`;

export default GlobalStyle;