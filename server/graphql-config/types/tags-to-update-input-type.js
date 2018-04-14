const {tagsSchema} = require("./../../../database/schema")

const {
  columns: {
    name
  }
} = tagsSchema

module.exports = `
  old${name.name}: String!
  new${name.name}: String!
`
