const buildWhereClause = require("./build-where-clause")

describe("server/graphql-config/resolvers/util/build-where-clause.js", () => {
  test("When an empty object is given an empty string is returned", () => {
    const expected = ""
    const acutal = buildWhereClause({})
    expect(acutal).toEqual(expected)
  })

  test("When all object values are empty an empty string is returned", () => {
    const expected = ""
    const acutal = buildWhereClause({arg1: undefined, arg2: undefined})
    expect(acutal).toEqual(expected)
  })

  test("When given args returns them in the format - arg = 'value' ", () => {
    const expected = "arg1 = 'value'"
    const acutal = buildWhereClause({arg1: "value"})
    expect(acutal).toEqual(expected)
  })

  test("When given multiple args returns them in the expected format", () => {
    const expected = "arg1 = 'value1' AND arg2 = 'value2'"
    const acutal = buildWhereClause({arg1: "value1", arg2: "value2"})
    expect(acutal).toEqual(expected)
  })

  test("When given multiple args where some are undefined only uses the defined args", () => {
    const expected = "arg1 = 'value1' AND arg3 = 'value3'"
    const acutal = buildWhereClause({arg1: "value1", arg2: undefined, arg3: "value3"})
    expect(acutal).toEqual(expected)
  })

  test("When given option 'ignoreCase' wraps all args and values in LOWER() function", () => {
    const expected = "LOWER(arg1) = LOWER('value1') AND LOWER(arg2) = LOWER('value2')"
    const acutal = buildWhereClause({arg1: "value1", arg2: "value2"}, {ignoreCase: true})
    expect(acutal).toEqual(expected)
  })
})
