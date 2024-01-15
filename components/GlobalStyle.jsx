import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/Inter-ExtraLight.woff2') format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Inter-Regular.woff2') format('woff');
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Inter-Medium.woff2") format("woff2"); }


  
  :root {
    --color-background: #fff;
    --color-text: #1e2024;
    --color-muted: #404040;
    --color-secondary: #F5F5F5;
    --color-tertiary: #E5E5E5;
    --color-date-icon: invert(0);
    --color-card: #F5F5F5;
    --color-card-hover: #E5E5E5;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: #0A0A0A;
      --color-text: #fafafa;
      --color-muted: #D4D4D4;
      --color-secondary: #262626;
      --color-date-icon: invert(1);

      --color-card:#171717;
      --color-card-hover:#262626;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-background);
    color: var(--color-text);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
`