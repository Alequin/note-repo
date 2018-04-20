const map = require("lodash/fp/map")

const postgresCommand = require("_common/database/postgres-command")

const notesTableSeeds = require("./notes-table-seeds.js")
const tagsTableSeeds = require("./tags-table-seeds.js")
const sourcesTableSeeds = require("./sources-table-seeds.js")

const {
  makeNoteTagsSeeds,
  makeNoteSourcesSeeds
} = require("./relationshipTablesSeeds.js")

const {
  notesSchema,
  tagsSchema,
  sourcesSchema,
  noteTagsSchema,
  noteSourcesSchema
} = require("_common/database/schema")

async function run(){
  await seed(notesInsertCommand(), notesTableSeeds)
  console.log("Seed complete: notes tables");

  await seed(tagsInsertCommand(), tagsTableSeeds)
  console.log("Seed complete: tags tables");

  await seed(sourcesInsertCommand(), sourcesTableSeeds)
  console.log("Seed complete: source tables");

  await seed(noteTagsInsertCommand(), await makeNoteTagsSeeds())
  console.log("Seed complete: note tags tables");

  await seed(noteSourcesInsertCommand(), await makeNoteSourcesSeeds())
  console.log("Seed complete: note source tables");
}

function seed(command, values){
  const promises = map((value) => {
    return postgresCommand(command, value)
  })(values)
  return Promise.all(promises)
}

function notesInsertCommand(){
  const notesColumns = notesSchema.columns
  return (
    `INSERT INTO ${notesSchema.name}
    (${notesColumns.title.name},
     ${notesColumns.summary.name},
     ${notesColumns.content.name})
    VALUES
    ($1, $2, $3);`
  )
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

function sourcesInsertCommand(){
  const sourcesColumns = sourcesSchema.columns
  return (
    `INSERT INTO ${sourcesSchema.name}
    (${sourcesColumns.name.name},
     ${sourcesColumns.islink.name},
     ${sourcesColumns.location.name})
    VALUES
    ($1, $2, $3);`
  )
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

run()
