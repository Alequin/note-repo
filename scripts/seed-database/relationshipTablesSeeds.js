const map = require("lodash/fp/map")
const postgresCommand = require("./../../database/postgres-command")
const roll = require("./util/roll")
const {
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema,
  noteSourcesSchema
} = require("./../../database/schema.js")

const makeNoteTagsSeeds = async function(){
  return await makeRelationshipRows(notesSchema.name, tagsSchema.name)
}

const makeNoteSourcesSeeds = async function(){
  return await makeRelationshipRows(notesSchema.name, sourcesSchema.name)
}

async function makeRelationshipRows(table1, table2, rowBuilder){
  const promises = [
    postgresCommand(`SELECT * FROM ${table1};`),
    postgresCommand(`SELECT * FROM ${table2};`)
  ]
  const [table1Content, table2Content] = await Promise.all(promises)
  return buildSeeds(table1Content.rows, table2Content.rows, rowBuilder)
}

function buildSeeds(table1Contents, table2Contents, rowBuilder){
  return map((table1Element) => {
    const table2Element = randomElement(table2Contents)
    return [table1Element.id, table2Element.id]
  })(table1Contents)
}

function randomElement(list){
  const max = list.length - 2
  return list[roll(0, max)]
}

// function noteTagsRowBuilder(note, tag){
//   const row =
//   }
//   return row
// }

function noteSourcesRowBuilder(note, source){

  const {
    columns:{
      noteId,
      sourceId
    }
  } = noteSourcesSchema

  const row = {
    [noteId]: noteId,
    [sourceId]: sourceId
  }
  return row
}

module.exports = {
  makeNoteTagsSeeds,
  makeNoteSourcesSeeds
}
