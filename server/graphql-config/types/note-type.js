const {notesSchema} = require("database/name-schema")

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
  ${id}: ID!
  ${title}: String!
  ${summary}: String!
  ${content}: String!
  ${creationDate}: String!
  tags: [Tag!]!
  sources: [Source!]!
`
