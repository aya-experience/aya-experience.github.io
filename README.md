# AYA App
AYA Website & App

[![Build Status](https://travis-ci.org/aya-experience/aya-experience.github.io.svg?branch=prod)](https://travis-ci.org/aya-experience/aya-experience.github.io)
[![Nuxt](https://img.shields.io/badge/nuxt-%5E1.1.1-brightgreen.svg)](https://github.com/nuxt/nuxt.js)
[![Xo](https://img.shields.io/badge/code%20style-xo-ff69b4.svg)](https://github.com/xojs/xo)
[![Aframe](https://img.shields.io/badge/aframe-%5E0.8.0-ff69b4.svg)](https://github.com/aframevr/aframe)
[![Issues](https://img.shields.io/github/issues/aya-experience/aya-experience.github.io/.svg)](https://github.com/aya-experience/aya-experience.github.io/issues)


## Getting Started

No Prerequisites needed. Just download or clone the project then follow the build setup.

### Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# post-installation (extract data from CMS)
$ npm run extract

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Running the tests

Unit Testing and End-To-End Testing

### Unit Testing using Jest

Testing Vue components with Jest + vue-test-utils

``` bash
# Launch jest
$ npm run unit
```

### And TDD mode using watch option

When developing a new component / feature

``` bash
# Launch jest using watch option
$ npm run tdd
```

### End-To-End Testing using Cypress
Lauch Cypress with record option:

``` bash
# Launch e2e tests
$ npm run e2e
```

Results available in GUI lauching:
``` bash
# Launch cypress GUI
$ npm run cypress:open
```

### Full option Testing
For pre-commit or CI, use linter, unit and e2e tests:

``` bash
# Launch linter, unit and e2e tests
$ npm run tests
```

## Deployment

The project is deployed on Github Page.

## Built With

* [Nuxt](https://nuxtjs.org/guide) - Universal Vue.js Applications
* [NPM](https://www.npmjs.com/) - The package manager
* [AFRAME](https://aframe.io/docs/0.8.0/introduction/) - WebVR Framework
* [Prismic](https://prismic.io/) - Headless API CMS 


## Authors

* **Matthieu Lux** - [Swiip](https://github.com/Swiip)
* **Florent Berthelot** - [FBerthelot](https://github.com/FBerthelot)
* **Samy Benyoub** - [Madaoo](https://github.com/Madaoo)


See also the list of [contributors](https://github.com/aya-experience/aya-experience.github.io/graphs/contributors) who participated in this project.

