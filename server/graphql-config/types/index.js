const {notesSchema} = require("database/schema")

const noteType = require("./note-type")
const tagType = require("./tag-type")
const sourceType = require("./source-type")

const sourceInputType = require("./source-input-type")
const tagsToUpdateInputType = require("./tags-to-update-input-type")
const sourcesToUpdateInputType = require("./sources-to-update-input-type")

const {
  columns: {
    title,
    summary,
    content,
  }
} = notesSchema

const schema = (
  `type Tag { ${tagType} }
  type Source { ${sourceType} }
  type Note { ${noteType} }

  input sourceArguments { ${sourceInputType} }
  input tagsToUpdateArguments { ${tagsToUpdateInputType} }
  input sourcesToUpdateArguments { ${sourcesToUpdateInputType} }

  type Query {
    notes(id: Int title: String tags: [String] ignoreCase: Boolean): [Note!]!
    tags: [Tag!]!
  }

  type Mutation {
    insertNote(
      ${title.name}: String!
      ${summary.name}: String!
      ${content.name}: String!
      tags: [String!]
      sources: [String!]
    ): Note

    insertTags(names: [String!]!): [Tag]
    updateTags(tags: [tagsToUpdateArguments!]!): [Tag]
    insertSources(sources: [sourceArguments!]!): [Source]
    updateSources(sources: [sourcesToUpdateArguments!]!): [Source]
  }`
)

console.log(schema);

module.exports = schema
