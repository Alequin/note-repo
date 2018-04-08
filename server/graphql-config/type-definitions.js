const noteType = require("./types/note-type")

module.exports = `
  type Query {
    notes: [Note!]!
  }

  type Note { ${noteType} }
`
