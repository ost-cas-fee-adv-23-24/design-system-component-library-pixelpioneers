<a name="readme-top"></a>

## Design System - PixelPioneers 🐥

![](https://img.shields.io/github/actions/workflow/status/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers/deploy-storybook.yaml?label=deploy%20storybook)
![](https://img.shields.io/github/actions/workflow/status/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers/release.yaml?label=release%20system%20design%20library)
![](https://img.shields.io/github/license/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers)
![](https://img.shields.io/github/contributors/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers)

<section align="center">
  <a href="https://ost-cas-fee-adv-23-24.github.io/design-system-component-library-pixelpioneers">
    <img src="src/assets/pixelpioneers.png" alt="PixelPioneers" width="100" height="100">
  </a>
  
  [Storybook](https://ost-cas-fee-adv-23-24.github.io/design-system-component-library-pixelpioneers) 📚
</section>

> Version: 0.0.0-development

> Distributed under the MIT License. See `LICENSE` for more information.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#contact">Contact</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#pre-requisites">Pre-requisites</a></li>
        <li><a href="#built-with">Built with</a></li>
        <li><a href="#bootstrapped-with">Bootstrapped with</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#available-scripts">Available scripts</a></li>
      </ul>
    </li>
    <li><a href="#collaboration">Collaboration</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

## Contact

Maintaners:

👋 Nico Lutz - [write an e-mail to Nico](mailto:nico.lutz@ost.ch)<br/>
👋 André Ceres - [write an e-mail to André](mailto:andre.ceres@ost.ch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Design System PixelPioneers is a Storybook with Tailwind integrated based on React Component Library. This is the first part of the CAS Frontend Engineering Advanced course which expect the result that this library can be installed in the Next.js application. In the Next.js application we can reuse components from this library.

### Pre-requisites

We need the [npm](https://www.npmjs.com/) package manager to install this library.

```sh
npm install npm@latest -g
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built with

[![React][React.js]][React-url]
[![Google Chrome][Google Chrome]][Google Chrome-url]
[![Storybook][Storybook]][Storybook-url]
[![NPM][NPM]][NPM-url]
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]
[![CSS3][CSS3]][CSS3-url]
[![HTML5][HTML5]][HTML5-url]
[![JavaScript][JavaScript]][JavaScript-url]
[![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Bootstrapped with

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Usage

TODO: ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### React

Create React App with TypeScript Template.
<br/>`npx create-react-app my-app --template typescript`
<br/>
[Link](https://create-react-app.dev/docs/getting-started)

#### Storybook

Install and integrate StoryBook.
<br/>
`npx storybook@latest init`

#### Tailwind

Get started with Tailwind.
<br/>
`npm install -D tailwindcss postcss autoprefixer`
<br/>
`npx tailwindcss init`

> Important
> <br/>
> 📣 If you are using Vite, @storybook/nextjs, @storybook/angular, or @storybook/preset-create-react-app with react-scripts@2.0.0, then leave the options object empty.
> <br/> > [Reference](https://github.com/storybookjs/addon-styling/blob/main/docs/getting-started/tailwind.md)

Tailwind CSS as a PostCSS installation and configuration, see
[here](https://tailwindcss.com/docs/installation/using-postcss)

Also see here: [How to setup Tailwind and StoryBook](https://storybook.js.org/recipes/tailwindcss).

#### TypeScript

Check and configure TypeScript,
see also [Configure Storybook with TypeScript](https://storybook.js.org/docs/react/configure/typescript).
<br/>
Then re-write stories in TypeScript only.

#### prettier

`npm install --save-dev --save-exact prettier`
<br/>
[Link](https://prettier.io/docs/en/install)

#### postcss

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more. Installing Tailwind CSS as a PostCSS plugin is the most seamless way to integrate it with build tools like webpack.
It also supports Autoprefixer. See the part of Tailwind above.

#### husky / Git hooks

You can use it to lint your commit messages, run tests, lint code and many more when you commit or push. See here [husky](https://typicode.github.io/husky/) or [husky npm](https://www.npmjs.com/package/husky).

#### lint-staged

Run linters against staged git files and don't let 💩 slip into your code base! Linting makes more sense when run before committing your code. By doing so you can ensure no errors go into the repository and enforce code style. Check there [lint-staged github](https://github.com/okonet/lint-staged) or [lint-staged npm](https://www.npmjs.com/package/lint-staged).

#### ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, see also [ESLint - npm](https://www.npmjs.com/package/eslint) or [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started).

#### commitlint

commitlint checks if your commit messages meet the [conventional commit format](commitlint checks if your commit messages meet the conventional commit format). See also [commitlint - github](https://github.com/conventional-changelog/commitlint) or [commitlint](https://commitlint.js.org/#/).

#### Workround

A way of dealing with a problem or making something work despite the problem, without completely solving it.

> Override TypeScript@5, see also there: [Workaround](https://github.com/facebook/create-react-app/issues/13080) > <br/>
> (We need TS@5 to bundle CJS and ESM)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Available scripts

In the project directory, you can run:

`npm run storybook` runs the storybook locally on port [http://localhost:6006](http://localhost:6006).

`npm run build` builds a cjs and esm module for production to the `lib` folder.

`npm run build:cjs` builds the cjs module to the `lib/cjs` folder.

`npm run build:esm` builds the esm module to the `lib/esm` folder.

`npm run build:cjs:tailwind` bundles the `index.css` in the `lib/cjs` folder.

`npm run build:esm:tailwind` bundles the `index.css` in the `lib/esm` folder.

`npm run clean` removes the `lib` folder.

`npm run lint` checks lint.

`npm run lint:fix` fixes lint.

`npm run prettier` runs prettier.

`npm run prettier-check` check code-format with prettier and print out warnings if available.

`npm pack` creates a tarball from a package.

`npm start` runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> The page will reload if you make edits. You will also see any lint errors in the console.

`npm test` launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Collaboration

Development Agreement

#### Conventional Commits

> A specification for adding human and machine readable meaning to commit messages, see also [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

#### Contribution

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag name: **enhancement**.
Don't forget to give the project a star! ⭐️ Thanks! 🙏

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/amazingFeature`
3. Commit your Changes `git commit -m 'Add some amazingFeature'`
4. Push to the Branch `git push origin feature/amazingFeature`
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Clean up README.md
- [x] Define why to use any packages
- [ ] Use TS for the file: `tailwind.config.js` instead
- [ ] Test all run scripts
- [ ] Add MDX for documentation
- [ ] Visual process flow in picture
- [ ] README.md - More details and corrections (after: Create React App with TypeScript Template)
- [ ] Test to install this package in the Next.js application
- [ ] Analyzing the Tailwind Export Module Issue
- [ ] Check https://github.com/prettier/eslint-config-prettier

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Google Chrome]: https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white
[Google Chrome-url]: https://www.google.com/chrome/
[Storybook]: https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white
[Storybook-url]: https://storybook.js.org/
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[CSS3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://developer.mozilla.org/en-US/docs/Glossary/HTML5
