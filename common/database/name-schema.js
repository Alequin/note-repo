const mapValues = require("lodash/fp/mapValues")
const set = require("lodash/fp/set")

const {
  notesSchema
} = require("./schema")

function namesOfSchema(schema){
  const {columns} = schema
  const updatedColumns = mapColumnNames(columns)
  return set('columns', updatedColumns, notesSchema)
}

const mapColumnNames = mapValues(({name}) => {return name})

module.exports = {
  notesSchema = namesOfNotesSchema()
}
