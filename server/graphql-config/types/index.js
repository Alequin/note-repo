const noteType = require("./note-type")
const tagType = require("./tag-type")

module.exports = `
  type Query {
    notes(id: Int title: String tags: [String] ignoreCase: Boolean): [Note!]!
  }

  type Tag{ ${tagType} }
  type Note { ${noteType} }
`
