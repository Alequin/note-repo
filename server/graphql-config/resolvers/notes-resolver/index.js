const findNotes = require("./find-notes")
const findNotesWithTags = require("./find-notes-with-tags")

async function notesResolver(_, {id, title, tags, ignoreCase}){
  if(tags){
    return await findNotesWithTags(id, title, tags, ignoreCase)
  }else{
    return await findNotes(id, title, ignoreCase)
  }
}

module.exports = notesResolver
