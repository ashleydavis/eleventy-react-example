# eleventy-react-example

A simple example of building a static web site on [React](https://reactjs.org/) with [Eleventy](https://www.11ty.dev/).

This project uses the plugin [`eleventy-plugin-react-static`](https://www.npmjs.com/package/eleventy-plugin-react-static) to enable Eleventy to render JSX and TSX files to static web pages (with [React hydration](https://reactjs.org/docs/react-dom.html#hydrate)).

## Pre requisites

Have [Node.js](https://nodejs.org/) installed.

## Setup

Clone this repo and then install dependencies:

```bash
cd eleventy-react-example
npm install
```

## Build the web site

```bash
npm run build
```

The static web site is generated under the subdirectory `_site`.

Test the build using `live-server`:

```bash
npm run test-build
```

## Run the site for development

Start the development server:

```bash
npm start
```

Then navigate your browser to:
http://localhost:8080/

## File system

The main files in this repo:

- `.eleventy.js` - Configuration for the static web site, includes setup of the plugin `eleventy-plugin-react-static`.
- `index.jsx` - The main (index) file for the web site.
- `components/` - Reusable React components that can be included in `index.jsx` and other pages, but are otherwise ignored by Eleventy (it won't generate static pages for anything under `components/`).
- `assets` - This directory is configured to be copied directly through to the static web site, put your static files here.
- `_includes` - The Eleventy directory that contains layouts. Note that `index.jsx` references `main` as it's layout, so the file `_includes/main.njk` is the HTML file into which the React static HTML is injected.

## Resources

- Eleventy
  - https://www.11ty.dev/
- React
  - https://reactjs.org/
- eleventy-plugin-react-static
  - https://www.npmjs.com/package/eleventy-plugin-react-static