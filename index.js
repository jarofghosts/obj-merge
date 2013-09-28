module.exports = merge

function merge() {
  var args = [].slice.call(arguments),
      l = args.length
  if (!l) return {}
  if (l == 1) return args[0]
  return parseObjects(args)
}

function parseObjects(objs) {
  var result = {},
      keys = []
  for (var i = 0, l = objs.length; i < l; ++i) {
    keys = keys.concat(Object.keys(objs[i]))
  }
  keys = keys.filter(function (k, idx, arr) { return arr.lastIndexOf(k) === idx })
  for (var k = 0, f = keys.length; k < f; ++k) {
    var keyResult = [],
        attr = keys[k]
    objs.map(function (el) {
      if (el.hasOwnProperty(attr)) {
        if (el[attr] instanceof Array) return keyResult = keyResult.concat(el[attr])
        keyResult.push(el[attr])
      }
    })
    result[attr] = keyResult
  }
  return result
}
