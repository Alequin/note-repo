const placeholderSet = require("./placeholder-set")

describe("server/graphql-config/resolvers/util/placeholder-set.js", () => {
  test("When set length is 0 and set count is 0 aeturns an empty string", () => {
    const expected = ""
    const acutal = placeholderSet(0, 0)
    expect(acutal).toEqual(expected)
  })

  test("When set count is 1 and set length is 0 returns an empty brackets", () => {
    const expected = "()"
    const acutal = placeholderSet(1, 0)
    expect(acutal).toEqual(expected)
  })

  test("When set count is 1 and set length is 1 returns 1 placeholder in 1 set", () => {
    const expected = "($1)"
    const acutal = placeholderSet(1, 1)
    expect(acutal).toEqual(expected)
  })

  test("When set count is 1 and set length is 3 returns 3 placeholder in 1 set", () => {
    const expected = "($1, $2, $3)"
    const acutal = placeholderSet(1, 3)
    expect(acutal).toEqual(expected)
  })

  test("When set count is 2 and set length is 2 returns 4 placeholder in 2 set", () => {
    const expected = "($1, $2), ($3, $4)"
    const acutal = placeholderSet(2, 2)
    expect(acutal).toEqual(expected)
  })

  test("When set count is 5 and set length is 1 returns 5 placeholder in 5 set", () => {
    const expected = "($1), ($2), ($3), ($4), ($5)"
    const acutal = placeholderSet(5, 1)
    expect(acutal).toEqual(expected)
  })

  // test("When set length is 0 returns an empty brackets", () => {
  //   const expected = "()"
  //   const acutal = placeholderSet(2, 0)
  //   expect(acutal).toEqual(expected)
  // })
  //
  // test("When set length is 3 and the placeholder number starts at 3 returns ($1, $2, $3)", () => {
  //   const expected = "($1, $2, $3)"
  //   const acutal = placeholderSet(3, 3)
  //   expect(acutal).toEqual(expected)
  // })
  //
  // test("When set length is 3 and the placeholder number starts at 9 returns ($7, $8, $9)", () => {
  //   const expected = "($7, $8, $9)"
  //   const acutal = placeholderSet(9, 3)
  //   expect(acutal).toEqual(expected)
  // })
  //
  // test("When set length is 3 and the placeholder number starts at 2 returns ($1, $2)", () => {
  //   const expected = "($1, $2)"
  //   const acutal = placeholderSet(2, 3)
  //   expect(acutal).toEqual(expected)
  // })
})
