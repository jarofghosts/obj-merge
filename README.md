obj-merge
====

[![Build Status](http://img.shields.io/travis/jarofghosts/wack.svg?style=flat)](https://travis-ci.org/jarofghosts/obj-merge)
[![npm install](http://img.shields.io/npm/dm/obj-merge.svg?style=flat)](https://www.npmjs.org/package/obj-merge)

accumulate some object properties

## usage

```js
var objm = require('obj-merge')

var cliOptions = {
    flags: ['norecurse', 'skipdotfiles']
  , files: 'good.md'
  , cat: 'Black Cat'
}

var configOptions = {
    flags: ['verbose', 'debug']
  , book: {name: 'Pet Sematary'}
}

var misc = {
    flags: 'makeabeep'
  , files: 'test.txt'
  , book: true
}

console.log(objm(cliOptions, configOptions, misc)) // =>

/*
{
    flags: ['norecurse', 'skipdotfiles', 'verbose', 'debug', 'makeabeep']
  , files: ['good.md', 'test.txt']
  , book: [{name: 'Pet Sematary'}, true]
  , cat: 'Black Cat'
}
*/
```

throw any number of objects at it (even 0) and it will return an object with
all of their top-level keys combined.

## license

MIT
