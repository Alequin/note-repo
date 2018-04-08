const {tagsSchema} = require("./../../../database/schema")

const {
  columns: {
    id,
    name
  }
} = tagsSchema

module.exports = `
  ${id.name}: ID!
  ${name.name}: String!
`