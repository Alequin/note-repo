const noteType = require("./note-type")
const tagType = require("./tag-type")
const sourceType = require("./source-type")

module.exports = `
  type Query {
    notes(id: Int title: String tags: [String] ignoreCase: Boolean): [Note!]!
  }
  type Mutation {
    insertTags(names: [String!]!): [Tag]
  }

  type Tag { ${tagType} }
  type Source { ${sourceType} }
  type Note { ${noteType} }
`
