const roundTo = require("round-to")

function roll(min, max, decimalPlaces = 0){
  const result = (Math.random() * ((max-min)+1) + min)
  return roundTo(result, decimalPlaces)
}

module.exports = roll
