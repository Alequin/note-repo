const findNotes = require("./find-notes")
const findNotesWithTags = require("./find-notes-with-tags")

async function notesResolver(_parent, {id, title, tags, ignoreCase}){
  if(tags && tags.length > 0){
    return await findNotesWithTags(id, title, tags, ignoreCase)
  }else{
    return await findNotes(id, title, ignoreCase)
  }
}

module.exports = notesResolver
