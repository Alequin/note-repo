const newDatabase = require(`_common/database/new-database`)
const dropDatabase = require(`_common/database/drop-database`)

const {databaseConfig: {name: dbName}} = require("_common/config")

const createNotesTable = require("./create-notes-table")
const createTagsTable = require("./create-tags-table")
const createSourcesTable = require("./create-sources-table")
const createNoteTagsTable = require("./create-note-tags-table")
const createNoteSourcesTable = require("./create-note-sources-table")

async function createDatabase(){
  await dropDatabase(dbName)
  await newDatabase(dbName)

  await createNotesTable()
  console.log("Created notes table");

  await createTagsTable()
  console.log("Created tags table");

  await createSourcesTable()
  console.log("Created source table");

  await createNoteTagsTable()
  console.log("Created note tags bridge table");

  await createNoteSourcesTable()
  console.log("Created note sources bridge table");
}

createDatabase()
