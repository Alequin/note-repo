const insertNote = require("./insert-note")

async function insertNoteResolver(_parent, args){
  return await insertNote(args)
}

module.exports = insertNoteResolver
