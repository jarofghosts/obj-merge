obj-merge
====

[![Build Status](https://travis-ci.org/jarofghosts/obj-merge.png?branch=master)](https://travis-ci.org/jarofghosts/obj-merge)

accumulate some object properties

## usage

```js
var objm = require('obj-merge'),
    cliOptions = { flags: ['norecurse', 'skipdotfiles'], files: 'good.md', cat: 'Black Cat' },
    configOptions = { flags: ['verbose', 'debug'] book: { name: 'Pet Sematary' } },
    misc = { flags: 'makeabeep', files: 'test.txt', book: true }
console.dir(objm(cliOptions, configOptions, misc))
/*
  { flags: ['norecurse', 'skipdotfiles', 'verbose', 'debug', 'makeabeep'],
    files: ['good.md', 'test.txt'],
    book: [{ name: 'Pet Sematary' }, true],
    cat: 'Black Cat' }
*/
```
throw any number of objects at it (even 0) and it will return an object with all of their top-level keys combined.

## license

MIT
