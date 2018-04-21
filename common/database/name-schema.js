const mapValues = require("lodash/mapValues")
const schema = require("./schema")

function mapSchemas(){
  return mapValues(schema, (table) => {
    return mapToNamesSchema(table)
  })
}

const mapToNamesSchema = require("./util/map-to-names-schema")

module.exports = Object.freeze(mapSchemas())
