const noteType = require("./note-type")
const tagType = require("./tag-type")
const sourceType = require("./source-type")

const sourceArgumentsType = require("./source-arguments-type")

module.exports = `
  type Tag { ${tagType} }
  type Source { ${sourceType} }
  type Note { ${noteType} }

  input sourceArguments { ${sourceArgumentsType} }

  type Query {
    notes(id: Int title: String tags: [String] ignoreCase: Boolean): [Note!]!
    tags: [Tag!]!
  }
  type Mutation {
    insertTags(names: [String!]!): [Tag]
    insertSources(sources: [sourceArguments!]!): [Source]
  }




`
