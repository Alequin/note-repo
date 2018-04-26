const flow = require("lodash/flow")
const findTagsOfNotes = require("./find-tags-of-notes")
const findSourcesOfNotes = require("./find-sources-of-notes")

module.exports = async function(notes){
  const notesWithTags = await findTagsOfNotes(notes)
  return await findSourcesOfNotes(notesWithTags)
}
