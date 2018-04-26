const {notesSchema} = require("database/name-schema")

const {
  columns: {
    title,
    summary,
    content,
  }
} = notesSchema


module.exports = `
  ${title}: String!
  ${summary}: String!
  ${content}: String!
  tagsIds: [Int!]
  sourcesIds: [Int!]
`
