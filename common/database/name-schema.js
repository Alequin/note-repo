const mapValues = require("lodash/mapValues")
const schema = require("./schema")
const mapToNamesSchema = require("./util/map-to-names-schema")

function mapSchemas(){
  return mapValues(schema, (table) => {
    return mapToNamesSchema(table)
  })
}

module.exports = Object.freeze(mapSchemas())
