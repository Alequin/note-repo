const updateNote = require("./update-note")

async function updateNoteResolver(_parent, args){
  return await updateNote(args)
}

module.exports = updateNoteResolver
