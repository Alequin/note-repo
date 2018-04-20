const {sourcesSchema} = require("_common/database/schema")

const {
  columns: {
    name
  }
} = sourcesSchema

module.exports = `
  old${name.name}: String!
  update: sourceArguments!
`
