import { createGlobalStyle } from "styled-components";
import { planeAnimationOnClick } from "../theme/KeyFrames";

export const size = {
	mobile: "0px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1400px",
	desktop: "2560px",
	ThirdSectionImageSize: "512px"
};

export const device = {
	mobile: `(min-width: ${size.mobile})`,
	mobileM: `(min-width: ${size.mobileM})`,
	mobileL: `(min-width: ${size.mobileL})`,
	tablet: `(min-width: ${size.tablet})`,
	laptop: `(min-width: ${size.laptop})`,
	laptopL: `(min-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,

	ThirdSectionImageSize: `(min-width: ${size.ThirdSectionImageSize})`
};

export const GlobalStyle = createGlobalStyle`
  /* form-placeholder-color: rgb(12, 122, 192); */
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chivo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'Chivo', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Chivo');
  }
  @font-face {
    font-family: 'Noah-Regular';
    src: url('/fonts/Noah-Regular.otf');
  }
  @font-face {
    font-family: 'Noah-Bold';
    src: url('/fonts/Noah-Bold.otf');
  }
  button, a {
    cursor: pointer;
    outline: none;
  }

  .animationDiv {
    margin: auto;
  }
  
  /* Static Class */
  .static {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    user-select:none;
    -webkit-text-fill-color: #FC8357;
    opacity: 1;
    width: 121px;
		height: 35px;
		font-size: 17px;

    background: #FFE8E8;
    box-shadow: 0 12px 13px -12px #FC8357;
    border-radius: 6px;
    width: 121px;
		height: 35px;
    margin: auto;
    color: #FC8357;
    border: none;
    font-family: Noah-Bold;
		font-size: 17px;
    display: flex; 
    flex-direction: row;
    padding: 1px 20px 0 19px;
    overflow: hidden;

    #Plane {
			width: 16px;
			height: 16px;
			margin: 0px 4px 0 0px;
			transition: all 400ms;
		}

    @media ${device.tablet} {
      :hover {
        transform: scale(1.09);
        transition: all 400ms;
        #Plane {
          
          transform: 
            translateX(-2px)
            rotate(-35deg)
            translateY(3px)
        }
      }
    }

  }

  /* animateOnClick Class */
  .animateOnClick {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    user-select:none;
    -webkit-text-fill-color: #FC8357;
    opacity: 1;


    background: #FFE8E8;
    box-shadow: 0 12px 13px -12px #FC8357;
    border-radius: 6px;
    width: 121px;
		height: 35px;
		font-size: 17px;
    margin: auto;
    color: #FC8357;
    border: none;
    font-family: Noah-Bold;
    display: flex; 
    flex-direction: row;
    padding: 1px 20px 0 12px;
    overflow: hidden;

    transition: all 700ms;
    text-align: center;

    #Sent {
      margin-left: 10px;
      margin-bottom: 1px;
    }

    #Plane {
			width: 16px;
			height: 16px;
			margin: 0px 4px 0 0px;
			transition: all 400ms;
      animation: ${planeAnimationOnClick} 600ms ease-in !important;
      animation-fill-mode: forwards !important;
		}

    @media ${device.tablet} {
      :hover {
        transition: all 400ms;
        #Plane {
          transform: 
            translateX(-2px)
            rotate(-35deg)
            translateY(3px)
            opacity(0)
        }
      }
    }

  }
  



/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  main {
    display: block;
  }
  
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd em font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent sub and sup elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to inherit in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }
  
`;

export default GlobalStyle;
