import { Global, css } from '@emotion/react';

const globalCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Signika&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Signika';
  }
`;

const GlobalStyles = () => <Global styles={globalCss} />;

export default GlobalStyles;
