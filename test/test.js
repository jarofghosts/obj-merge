var assert = require('assert'),
    objm = require('../')

assert.deepEqual(objm(), {})
assert.deepEqual(objm({ hey: 'woo' }), { hey: 'woo' })
assert.deepEqual(objm({ hey: 'woo' }, { hey: 'wee' }), { hey: ['woo', 'wee'] })
assert.deepEqual(objm({ a: [1, 2] }, { a: [3, 4], b: 0 }), { a: [1, 2, 3, 4], b: 0 })
assert.deepEqual(objm({ a: [0] }, { a: [1] }, { a: [2] }, { a: [3, 4] }, { a: 5 }), { a: [0, 1, 2, 3, 4, 5] })
assert.deepEqual(objm({ a: true }, { a: { b: 'c' } }), { a: [true, { b: 'c' }] })
assert.deepEqual(objm({ a: 0, b: 0 }, { a: [1, 2] }, { a: [3, 4] }, { a: 5, c: 0 }), { a: [0, 1, 2, 3, 4, 5], b: 0, c: 0 })
