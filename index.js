module.exports = merge

function merge() {
  var objs = [].slice.call(arguments)
    , l = objs.length
    , i = 0

  if(!l) return {}
  if(l === 1) return objs[0]

  var result = {}
    , keys = []

  var keyResult
    , convert
    , attr
    , el

  for(; i < l; ++i) {
    keys = keys.concat(Object.keys(objs[i]))
  }

  for(i = 0, l = keys.length; i < l; ++i) {
    if(keys.lastIndexOf(keys[i]) !== i) {
      keys.splice(i, -1)
    }
  }

  for(i = 0, l = keys.length; i < l; ++i) {
    keyResult = []
    attr = keys[i]
    convert = false

    for(var j = 0, k = objs.length; j < k; ++j) {
      el = objs[j]
      if(!el.hasOwnProperty(attr)) continue
      if(!Array.isArray(el[attr])) {
        keyResult.push(el[attr])
      } else {
        keyResult = keyResult.concat(el[attr])
        convert = true
      }
    }

    if(keyResult.length === 1 && !convert) keyResult = keyResult[0]
    result[attr] = keyResult
  }

  return result
}
