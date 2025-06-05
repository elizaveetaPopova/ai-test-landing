import { createGlobalStyle } from 'styled-components';

import CirceRoundedRegular from '../assets/fonts/CirceRounded-Regular.otf';
import CirceRoundedBold from '../assets/fonts/CirceRounded-Bold.otf';
import CirceRoundedThin from '../assets/fonts/CirceRounded-Thin.otf';
import CirceRoundedLight from '../assets/fonts/CirceRounded-Light.otf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Circe Rounded';
    src: url(${CirceRoundedRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circe Rounded';
    src: url(${CirceRoundedBold}) format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Circe Rounded';
    src: url(${CirceRoundedThin}) format('opentype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Circe Rounded';
    src: url(${CirceRoundedLight}) format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Circe Rounded', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
