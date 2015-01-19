module.exports = merge

function merge() {
  var objs = [].slice.call(arguments)
    , len = objs.length

  if(!len) return {}
  if(len === 1) return objs.shift()

  return objs.reduce(mergeObjects, {})

  function mergeObjects(curr, next) {
    var keys = Object.keys(next)
      , key

    for(var i = 0, len = keys.length; i < len; ++i) {
      key = keys[i]
      if(curr.hasOwnProperty(key)) {
        curr[key] = [].concat(curr[key]).concat(next[key])
      } else {
        curr[key] = next[key]
      }
    }

    return curr
  }
}
