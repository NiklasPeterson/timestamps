# Template for Next.js app with styled-components

This example features how yo use [styled-components](https://github.com/styled-components/styled-components) which supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. 

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

## Getting Started

1. Clone this repo:

```
git clone https://github.com/niklaspeterson/next-styled-components-template.git`
# or
gh repo clone NiklasPeterson/next-styled-components-templat
```
2. Navigate to the directory and run:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit and save the file.


## Deploy to Netlify options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/niklaspeterson/next-styled-components-template)

**Option two:** Manual clone & setup

1. Clone this repo: `git clone https://github.com/niklaspeterson/next-styled-components-template.git`
2. Navigate to the directory and run `npm run dev` or `yarn dev`
3. Make your changes
4. Connect to [Netlify](https://url.netlify.com) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

## Dependencies

- [Next.js](https://nextjs.org/)
- [Styled-components](https://www.styled-components.com)
