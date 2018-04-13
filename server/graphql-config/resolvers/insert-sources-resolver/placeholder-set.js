
function placeholderSet(placeholderNumber, setLength){
  const nextSetLength = setLength - 1
  if(nextSetLength < 0) return ""

  if(nextSetLength > 0 && placeholderNumber > 1){
    return `${placeholderSet(placeholderNumber - 1, nextSetLength)}, $${placeholderNumber}`
  }else{
    return `$${placeholderNumber}`
  }
}

module.exports = (placeholderNumber, setLength) =>
  `(${placeholderSet(placeholderNumber, setLength)})`
