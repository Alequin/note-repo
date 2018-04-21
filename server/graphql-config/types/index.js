
const noteType = require("./note-type")
const tagType = require("./tag-type")
const sourceType = require("./source-type")

const noteInputArguments = require("./note-input-arguments")
const sourceInputType = require("./source-input-type")
const tagsToUpdateInputType = require("./tags-to-update-input-type")
const sourcesToUpdateInputType = require("./sources-to-update-input-type")

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
    insertNote(${noteInputArguments}): Note
    updateNote(id: Int! ${noteInputArguments}): Note

    insertTags(names: [String!]!): [Tag]
    updateTags(tags: [tagsToUpdateArguments!]!): [Tag]
    insertSources(sources: [sourceArguments!]!): [Source]
    updateSources(sources: [sourcesToUpdateArguments!]!): [Source]
  }`
)

console.log(schema);

module.exports = schema
