import accessDatabase from "./../../database/accessDatabase.js"

import notesTableSeeds from "./notesTableSeeds.js"
import tagsTableSeeds from "./tagsTableSeeds.js"
import sourcesTableSeeds from "./sourcesTableSeeds.js"
import {
  makeNoteTagsSeeds,
  makeNoteSourcesSeeds
} from "./relationshipTablesSeeds.js"

import {
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema,
  noteSourcesSchema
} from "./../../database/schema.js"

function run(){
  seed(notesInsertCommand(), notesInsertValues())
    .then(() => {
      console.log("Seed complete: notes tables");
      return seed(tagsInsertCommand(), tagsInsertValues())
    })
    .then(() => {
      console.log("Seed complete: tags tables");
      return seed(sourcesInsertCommand(), sourcesInsertValues())
    })
    .then(() => {
      console.log("Seed complete: source tables");
      return noteTagsInsertValues().then((values) => {
        return seed(noteTagsInsertCommand(), values)
      })
    })
    .then(() => {
      console.log("Seed complete: note tags tables");
      return noteSourcesInsertValues().then((values) => {
        return seed(noteSourcesInsertCommand(), values)
      })
    })
    .then(() => {
      console.log("Seed complete: note source tables");
    })
    .catch((err) => {
      console.log(err);
    })
}

function seed(command, values){
  const promises = []
  for(let value of values){
    promises.push(accessDatabase.connect(command, value))
  }
  return Promise.all(promises)
}

function notesInsertCommand(){
  const notesColumns = notesSchema.columns
  return (
    `INSERT INTO ${notesSchema.name}
    (${notesColumns.title.name},
     ${notesColumns.summary.name},
     ${notesColumns.file.name},
     ${notesColumns.creationDate.name})
    VALUES
    ($1, $2, $3, $4);`
  )
}

function notesInsertValues(){
  return notesTableSeeds.map((note) => {
    return [note.title, note.summary, note.file, note.creationDate]
  })
}

function tagsInsertCommand(){
  const tagsColumns = tagsSchema.columns
  return (
    `INSERT INTO ${tagsSchema.name}
    (${tagsColumns.name.name})
    VALUES
    ($1);`
  )
}

function tagsInsertValues(){
  return tagsTableSeeds.map((tag) => {
    return [tag.name]
  })
}

function sourcesInsertCommand(){
  const sourcesColumns = sourcesSchema.columns
  return (
    `INSERT INTO ${sourcesSchema.name}
    (${sourcesColumns.name.name},
     ${sourcesColumns.type.name},
     ${sourcesColumns.location.name})
    VALUES
    ($1, $2, $3);`
  )
}

function sourcesInsertValues(){
  return sourcesTableSeeds.map((source) => {
    return [source.name, source.type, source.location]
  })
}

function noteTagsInsertCommand(){
  const noteTagsColumns = noteTagsSchema.columns
  return (
    `INSERT INTO ${noteTagsSchema.name}
    (${noteTagsColumns.noteId.name},
     ${noteTagsColumns.tagId.name})
    VALUES
    ($1, $2);`
  )
}

function noteTagsInsertValues(){
  return makeNoteTagsSeeds()
    .then((rows) => {
      return rows.map((noteTag) => {
        return [noteTag.noteId, noteTag.tagId]
      })
    })
}

function noteSourcesInsertCommand(){
  const noteSourcesColumns = noteSourcesSchema.columns
  return (
    `INSERT INTO ${noteSourcesSchema.name}
    (${noteSourcesColumns.noteId.name},
     ${noteSourcesColumns.sourceId.name})
    VALUES
    ($1, $2);`
  )
}

function noteSourcesInsertValues(){
  return makeNoteSourcesSeeds()
    .then((rows) => {
      return rows.map((noteSource) => {
        return [noteSource.noteId, noteSource.sourceId]
      })
    })
}

run()
