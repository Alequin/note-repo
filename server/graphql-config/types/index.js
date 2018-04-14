const noteType = require("./note-type")
const tagType = require("./tag-type")
const sourceType = require("./source-type")

const sourceInputType = require("./source-input-type")
const tagsToUpdateInputType = require("./tags-to-update-input-type")

module.exports = `
  type Tag { ${tagType} }
  type Source { ${sourceType} }
  type Note { ${noteType} }

  input sourceArguments { ${sourceInputType} }
  input tagsToUpdateArguments { ${tagsToUpdateInputType} }

  type Query {
    notes(id: Int title: String tags: [String] ignoreCase: Boolean): [Note!]!
    tags: [Tag!]!
  }
  
  type Mutation {
    insertTags(names: [String!]!): [Tag]
    updateTags(tags: [tagsToUpdateArguments!]!): [Tag]
    insertSources(sources: [sourceArguments!]!): [Source]
  }
`
