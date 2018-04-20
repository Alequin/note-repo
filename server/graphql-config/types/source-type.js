const {sourcesSchema} = require("_common/database/schema")

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

module.exports = `
  ${id.name}: ID!
  ${name.name}: String!
  ${islink.name}: Boolean!
  ${location.name}: String!
`
