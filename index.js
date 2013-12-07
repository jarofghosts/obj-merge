module.exports = merge

function merge() {
  var objs = [].slice.call(arguments),
      l = objs.length

  if (!l) return {}
  if (l === 1) return objs[0]

  var result = {},
      keys = []

  for (var i = 0; i < l; ++i) {
    keys = keys.concat(Object.keys(objs[i]))
  }

  keys = keys.filter(function (k, idx, arr) { return arr.lastIndexOf(k) === idx })

  for (var k = 0, f = keys.length; k < f; ++k) {
    var keyResult = [],
        attr = keys[k],
        convert = false

    objs.map(function (el) {
      if (el.hasOwnProperty(attr)) {
        if (Array.isArray(el[attr])) {
          keyResult = keyResult.concat(el[attr])
          return convert = true
        }
        keyResult.push(el[attr])
      }
    })

    if (keyResult.length == 1 && !convert) keyResult = keyResult[0]
    result[attr] = keyResult
  }

  return result
}
