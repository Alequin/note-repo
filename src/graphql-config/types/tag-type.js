const {tagsSchema} = require("database/name-schema")

const {
  columns: {
    id,
    name
  }
} = tagsSchema

module.exports = `
  ${id}: ID!
  ${name}: String!
`
