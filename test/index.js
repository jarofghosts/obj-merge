var test = require('tape')

var objm = require('../')

test('returns an empty object if no args', function(t) {
  t.plan(1)
  t.deepEqual(objm(), {})
})

test('returns unmodified original object if only one argument', function(t) {
  t.plan(1)
  t.deepEqual(objm({hey: 'woo'}), {hey: 'woo'})
})

test('combines values into an array for matching keys', function(t) {
  t.plan(1)
  t.deepEqual(objm({hey: 'woo'}, {hey: 'wee'}), {hey: ['woo', 'wee']})
})

test('combines arrays in order', function(t) {
  t.plan(2)
  t.deepEqual(objm({a: [1, 2]}, {a: [3, 4], b: 0}), {a: [1, 2, 3, 4], b: 0})
  t.deepEqual(
      objm({a: [0]}, {a: [1]}, {a: [2]}, {a: [3, 4]}, {a: 5})
    , {a: [0, 1, 2, 3, 4, 5]}
  )
})

test('adds items to arrays', function(t) {
  t.plan(2)
  t.deepEqual(objm({a: true}, {a: {b: 'c'}}), {a: [true, {b: 'c'}]})
  t.deepEqual(
      objm({a: 0, b: 0}, {a: [1, 2]}, {a: [3, 4]}, {a: 5, c: 0})
    , {a: [0, 1, 2, 3, 4, 5], b: 0, c: 0}
  )
})
