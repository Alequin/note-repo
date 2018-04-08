const noteType = require("./note-type")

module.exports = `
  type Query {
    notes(id: Int title: String): [Note!]!
  }

  type Note { ${noteType} }
`
