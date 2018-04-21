const {sourcesSchema} = require("database/schema")

const {
  columns: {
    name
  }
} = sourcesSchema

module.exports = `
  old${name.name}: String!
  update: sourceArguments!
`
