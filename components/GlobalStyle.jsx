import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-background);
    color: var(--color-text)
  }

  :root {
	--color-background: #fafafa;
	--color-text: #1e2024;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-background: #1e2024;
		--color-text: #fafafa;
	}
}

`

export const theme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
  },
}