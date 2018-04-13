const placeholderSet = require("./placeholder-set")

describe("server/graphql-config/resolvers/insert-sources-resolver/placeholder-set.js", () => {
  test("When set length is 0 returns an empty brackets", () => {
    const expected = "()"
    const acutal = placeholderSet(2, 0)
    expect(acutal).toEqual(expected)
  })

  test("When set length is 3 and the placeholder number starts at 3 returns ($1, $2, $3)", () => {
    const expected = "($1, $2, $3)"
    const acutal = placeholderSet(3, 3)
    expect(acutal).toEqual(expected)
  })

  test("When set length is 3 and the placeholder number starts at 9 returns ($7, $8, $9)", () => {
    const expected = "($7, $8, $9)"
    const acutal = placeholderSet(9, 3)
    expect(acutal).toEqual(expected)
  })

  test("When set length is 3 and the placeholder number starts at 2 returns ($1, $2)", () => {
    const expected = "($1, $2)"
    const acutal = placeholderSet(2, 3)
    expect(acutal).toEqual(expected)
  })
})
