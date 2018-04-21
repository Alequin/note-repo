
const placeholderSet = require("./../util/placeholder-set")

function commandWithPlaceholders(command, placeholderSetCount, placeholderSetLength){
  return `${command} ${placeholderSet(placeholderSetCount, placeholderSetLength)}`
}

module.exports = commandWithPlaceholders
