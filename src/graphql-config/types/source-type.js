const {sourcesSchema} = require("database/name-schema")

const {
  columns: {
    id,
    name,
    islink,
    location
  }
} = sourcesSchema

module.exports = `
  ${id}: ID!
  ${name}: String!
  ${islink}: Boolean!
  ${location}: String!
`
