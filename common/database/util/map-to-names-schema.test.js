const mapToNamesSchema = require("./map-to-names-schema")

const MOCK_SCHEMA = {
  columns:{
    row1: {name: "eggs"},
    row2: {name: "cheese"},
    row3: {name: "onions"}
  }
}

describe("common/database/util/map-to-names-schema.js", () => {
  test("Should take the colums names and apply them as the value in the columns object", () => {
    const expected = {columns: {
      "row1": "eggs",
      "row2": "cheese",
      "row3": "onions"
    }}
    const actual = mapToNamesSchema(MOCK_SCHEMA)
    expect(actual).toEqual(expected)
  })

  test("Should not mutate the original object", () => {
    const actual = mapToNamesSchema(MOCK_SCHEMA)
    expect(MOCK_SCHEMA).not.toBe(actual)
  })
})
