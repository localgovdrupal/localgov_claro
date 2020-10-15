# LocalGovDrupal Claro subtheme (experimental)

## Contents

* [Overview](#overview "Overview")
* [Installation](#installation "Requirements and installation")
* [Usage](#usage "How to use")
* [Configuration](#configuration "Configuring the theme")

## [Overview](#overview)

Add descriptions...

## [Installation](#installation)

### Requirements

* node 8+
* php 7+
* composer 1.9+
* yarn 1.13+ _or npm 6.4+_

### Installation

You'll probably have to run all of these commands inside Lando, eg `lando yarn`

1. Install the node packages with `yarn install`

2. You will now need to configure BrowserSync, in `gulpfile.js` edit the port number for browsersync and set the port for your lando setup and the domain if you want to proxy the Drupal site

3. You should now be able to compile using `yarn build`

## [Usage](#usage)

Styling is available inside the `style` folder where you will find a base SASS file and the compiled CSS.

JS is not yet transpiled. Make an issue if this is a requirement.

## [Configuration](#configuration)

Currently all browsersync configuration is directly inside the `gulpfile.js` file.
