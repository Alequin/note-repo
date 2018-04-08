import accessDatabase from "./../../database/accessDatabase.js"
import {newIntegerDice} from "./../../services/IntegerDice.js"
import {
  notesSchema,
  tagsSchema,
  sourcesSchema,
} from "./../../database/schema.js"

export const makeNoteTagsSeeds = function(){
  return makeRelationshipRows(notesSchema.name, tagsSchema.name, noteTagsRowBuilder)
}

export const makeNoteSourcesSeeds = function(){
  return makeRelationshipRows(notesSchema.name, sourcesSchema.name, noteSourcesRowBuilder)
}

function makeRelationshipRows(table1, table2, rowBuilder){
  const promises = [
    accessDatabase.connect(`SELECT * FROM ${table1};`),
    accessDatabase.connect(`SELECT * FROM ${table2};`)
  ]
  const promise = Promise.all(promises)
    .then((results) => {
      return Promise.resolve(
        buildSeeds(
          results[0].rows,
          results[1].rows,
          rowBuilder
        )
      )
    }).catch((err) => {
      console.log(err)
    })

  return promise
}

function buildSeeds(table1, table2, rowBuilder){
  let seeds = []
  for(let element of table1){
    const rows = newRows(element, table2, rowBuilder)
    seeds = seeds.concat(rows)
  }
  return seeds
}

function newRows(table1, table2, rowBuilder){
  const rows = []

  const die = newIntegerDice(0, table2.length-1)
  const loop = newIntegerDice(1, 4).roll()
  for(let j=0; j<loop; j++){
    const val = table2[die.roll()].id
    rows.push(rowBuilder(table1.id, val))
  }
  return rows
}

function noteTagsRowBuilder(noteId, tagId){
  const row = {
    noteId: noteId,
    tagId: tagId
  }
  return row
}

function noteSourcesRowBuilder(noteId, sourceId){
  const row = {
    noteId: noteId,
    sourceId: sourceId
  }
  return row
}
