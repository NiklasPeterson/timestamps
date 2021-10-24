import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Inter Extra Light';
    src: url('/fonts/Inter-ExtraLight.woff2') format('woff');
    font-style: normal;
    font-weight: 200;
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
  }

  :root {
    --color-background: #fafafa;
    --color-text: #1e2024;
    --color-secondary: #eee;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: #1e2024;
      --color-text: #fafafa;
      --color-secondary: #121212;
    }
  }
`