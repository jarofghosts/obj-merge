module.exports = merge

function merge() {
  var objs = [].slice.call(arguments)
    , len = objs.length

  if(!len) return {}
  if(len === 1) return objs.shift()

  return objs.reduce(mergeObjects)

  function mergeObjects(curr, next) {
    var keys = Object.keys(curr)
      , key

    for(var i = 0,len = keys.length; i < len; ++i) {
      key = keys[i]
      if(next.hasOwnProperty(key)) {
        next[key] = [].concat(curr[key]).concat(next[key])
      }
      else {
        next[key] = curr[key]
      }
    }

    return next
  }
}
