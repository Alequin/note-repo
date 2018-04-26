const {sourcesSchema} = require("database/name-schema")

const {
  columns: {
    name
  }
} = sourcesSchema

module.exports = `
  old${name}: String!
  update: sourceArguments!
`
