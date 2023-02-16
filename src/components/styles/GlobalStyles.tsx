import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Manrope', sans-serif;
  }
  body{
    background-color: rgba(32, 32, 32, 1);
  }
  a{
    text-decoration: none;
  }
  a:visited{
    color: inherit;
  }
  #root{
    margin:0 auto;
  }
`;

export default GlobalStyles;
