import { createGlobalStyle } from 'styled-components';
import media from '@utils/media';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
  }
  html {
    font-size: 16px;
    ${media.medium`
      font-size: 14px;
    `}
    ${media.small`
    font-size: 12px;
    `}
  }
`;

export default GlobalStyle;
