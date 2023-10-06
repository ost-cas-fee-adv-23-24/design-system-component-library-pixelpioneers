# Design System - PixelPioneers

<section align="center">
  <a href="https://ost-cas-fee-adv-23-24.github.io/design-system-component-library-pixelpioneers">
    <img src="src/assets/pixelpioneers.png" alt="PixelPioneers" width="100" height="100">
  </a>
  [Storybook](https://ost-cas-fee-adv-23-24.github.io/design-system-component-library-pixelpioneers)
</section>

## Project Health

![](https://img.shields.io/github/actions/workflow/status/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers/deploy-storybook.yaml?label=github%20pages)
![](https://img.shields.io/github/license/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers)
![](https://img.shields.io/github/contributors/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers)

## Support Contact

-   Nico Lutz - [Write to: Nico](mailto:nico.lutz@ost.ch)
-   André Ceres - [Write to: André](mailto:andre.ceres@ost.ch)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootstrapped with following steps:

TODO: More Details and correction:

-   React

Create React App with TypeScript Template [Link](https://create-react-app.dev/docs/getting-started)

`npx create-react-app my-app --template typescript`

-   Storybook

Install and integrate StoryBook.

`npx storybook@latest init`

-   Tailwind

Get started with Tailwind.

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init`

Important:
📣 If you are using Vite, @storybook/nextjs, @storybook/angular, or @storybook/preset-create-react-app with react-scripts@2.0.0, then leave the options object empty.
[Reference](https://github.com/storybookjs/addon-styling/blob/main/docs/getting-started/tailwind.md)

Tailwind CSS as a PostCSS installation and configuration [Link](https://tailwindcss.com/docs/installation/using-postcss)

Also see [How to setup Tailwind and StoryBook](https://storybook.js.org/recipes/tailwindcss)

-   TypeScript

Check and configure TypeScript [Link](https://storybook.js.org/docs/react/configure/typescript)
Later be aware to re-write stories in TypeScript.

-   Prettier

`npm install --save-dev --save-exact prettier`

[Link](https://prettier.io/docs/en/install)

-   Husky / Git hooks

[Link](https://prettier.io/docs/en/install)

-   Override TypeScript@5 [Workaround](https://github.com/facebook/create-react-app/issues/13080)
-   We need TS@5 to bundle CJS and ESM

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook locally on port [http://localhost:6006](http://localhost:6006).

### `npm run build`

Builds a cjs and esm module for production to the `lib` folder.

#### `npm run build:cjs`

Builds the cjs module to the `lib/cjs` folder.

#### `npm run build:esm`

Builds the esm module to the `lib/esm` folder.

#### `npm run build:cjs:tailwind`

Bundles the `index.css` in the `lib/cjs` folder.

#### `npm run build:esm:tailwind`

Bundles the `index.css` in the `lib/esm` folder.

### `npm run clean`

Removes the `lib` folder.

### `npm run prettier`

Runs prettier.

### `npm run prettier-check`

Check code-format with prettier and print out warnings if available.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.
