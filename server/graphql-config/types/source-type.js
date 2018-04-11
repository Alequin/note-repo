const {sourcesSchema} = require("./../../../database/schema")

const {
  columns: {
    id,
    name,
    type,
    location
  }
} = sourcesSchema

module.exports = `
  ${id.name}: ID!
  ${name.name}: String!
  ${type.name}: String!
  ${location.name}: String!
`