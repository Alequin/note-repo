const {notesSchema} = require("database/schema")

const {
  columns: {
    title,
    summary,
    content,
  }
} = notesSchema


module.exports = `
  ${title.name}: String!
  ${summary.name}: String!
  ${content.name}: String!
  tagsIds: [Int!]
  sourcesIds: [Int!]
`
