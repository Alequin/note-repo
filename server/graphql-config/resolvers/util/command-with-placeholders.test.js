
const commandWithPlaceholders = require("./command-with-placeholders")

const MOCK_COMMAND = "INSERT INTO table"

describe("server/graphql-config/resolvers/insert-note-resolver/command-with-placeholders.js", () => {
  test("Appends the correct placeholders onto the given command", () => {
    const expected = `${MOCK_COMMAND} ($1, $2)`
    const actual = commandWithPlaceholders(MOCK_COMMAND, 1, 2)
    expect(actual).toEqual(expected)
  })
})
