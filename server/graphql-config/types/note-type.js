const {notesSchema} = require("./../../../database/schema")

const {
  columns: {
    id,
    title,
    summary,
    content,
    creationDate
  }
} = notesSchema

module.exports = `
  ${id.name}: ID!
  ${title.name}: String!
  ${summary.name}: String!
  ${content.name}: String!
  ${creationDate.name}: String!
`
