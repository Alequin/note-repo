const {old, next } = require("./modify-row-name")

describe("server/graphql-config/resolvers/util/modify-row-name.js", () => {
  describe("The function old", () => {
    test("should prepend all strings with the word old", () => {
      const expected = "oldrow"
      const actual = old("row")
      expect(actual).toBe(expected)
    })
  })
  describe("The function next", () => {
    test("should prepend all strings with the word next", () => {
      const expected = "nextrow"
      const actual = next("row")
      expect(actual).toBe(expected)
    })
  })
})
