[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/vigour-infonline.svg)](https://badge.fury.io/js/vigour-infonline)
[![Build Status](https://travis-ci.org/vigour-io/infonline.svg?branch=develop)](https://travis-ci.org/vigour-io/infonline)

# Infonline plugin
Provides infonline integration

## Install
Add `"infonline": "git+ssh://git@github.com:vigour-io/infonline.git#master"` to the dependencies in your app's pakage.json, then run `npm update infonline`

Coming soon: `npm i vigour-infonline`

## Usage
Th eplugin must be configured in the `package.json` adding the siteId used by Infonline to associate the tracking event with the site

```js
// plugini intialization
var infonline = require('vigour-infonline')

// init is send setting plugin value as true
// it will load the script (if web)
infonline.val = true

// to track we have the `track` method which accepts a JSON object
infonline.track({
  // cp, used to identify pages and later by infonline
  // to categorize.you can freely chose a code of your
  // choice (if not given by customer)
  cp: 'fakecode',
  // sv, FRABO control, check infonline docs
  sv: 'fakesv',
  // co, an optional comment
  co: 'fakecomment'
})
```

See [tests](test) for more use cases.

## Specifications for native communication

see [Plugin API](PLUGIN_API.md)
