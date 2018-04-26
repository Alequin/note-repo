
function old(row){
  return prepend("old", row)
}

function next(row){
  return prepend("next", row)
}

function prepend(pre, post){
  return pre + post
}

module.exports = {
  old,
  next
}
