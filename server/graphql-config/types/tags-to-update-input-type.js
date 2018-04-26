const {tagsSchema} = require("database/name-schema")

const {
  columns: {
    name
  }
} = tagsSchema

module.exports = `
  old${name}: String!
  new${name}: String!
`
