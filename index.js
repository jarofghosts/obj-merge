module.exports = merge

function merge() {
  var args = [].slice.call(arguments)
  if (!args.length) return {}
  if (args.length == 1) return args[0]
}
