const mapValues = require("lodash/fp/mapValues")
const set = require("lodash/fp/set")

function mapToNamesSchema(schema){
  const {columns} = schema
  const updatedColumns = mapColumnNames(columns)
  return set('columns', updatedColumns, schema)
}

const mapColumnNames = mapValues(({name}) => {return name})

module.exports = mapToNamesSchema
