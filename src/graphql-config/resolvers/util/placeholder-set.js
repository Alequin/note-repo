const times = require("lodash/times")

function placeholderSets(setCount, setLength){
  const nextSetCount = setCount - 1
  if(nextSetCount < 0) return ""

  const placeholderSet = `${set(setCount, setLength)}`

  if(nextSetCount > 0){
    return `${placeholderSets(nextSetCount, setLength)}, ${placeholderSet}`
  }else{
    return `${placeholderSet}`
  }
}

function set(setCount, setLength){
  const maxPlaceholder = setCount * setLength
  return `(${buildSet(maxPlaceholder, setLength)})`
}

function buildSet(maxPlaceholder, setLength){
  const nextSetLength = setLength - 1
  const nextPlaceholder = maxPlaceholder - 1
  if(nextSetLength < 0) return ""

  const placeholder = `$${maxPlaceholder}`

  if(nextSetLength > 0){
    return `${buildSet(nextPlaceholder, nextSetLength)}, ${placeholder}`
  }else{
    return`${placeholder}`
  }
}

module.exports = placeholderSets


// function placeholderSet(placeholderNumber, setLength){
//   const nextSetLength = setLength - 1
//   if(nextSetLength < 0) return ""
//
//   if(nextSetLength > 0 && placeholderNumber > 1){
//     return `${placeholderSet(placeholderNumber - 1, nextSetLength)}, $${placeholderNumber}`
//   }else{
//     return `$${placeholderNumber}`
//   }
// }
//
// module.exports = (placeholderNumber, setLength) =>
//   `(${placeholderSet(placeholderNumber, setLength)})`
