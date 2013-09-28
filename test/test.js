var assert = require('assert'),
    objm = require('../')

assert.deepEqual(objm(), {})
assert.deepEqual(objm({ hey: 'woo' }), { hey: 'woo' })
assert.deepEqual(objm({ hey: 'woo' }, { hey: 'wee' }), { hey: ['woo', 'wee'] })
assert.deepEqual(objm({ a: [1, 2] }, { a: [3, 4], b: 0 }), { a: [1, 2, 3, 4], b: 0 })
