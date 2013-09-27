var assert = require('assert'),
    objm = require('../')

assert.deepEqual(objm(), {})
assert.deepEqual(objm({ hey: 'woo' }), { hey: 'woo' })
assert.deepEqual(objm({ hey: 'woo' }, { hey: 'wee' }), { hey: ['woo', 'wee'] })
