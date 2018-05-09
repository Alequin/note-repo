
import buildQueryStringFrom from "./build-query-string-from"

describe("common/util/build-query-string-from.js", () => {

  test("When given an object where all keys are strings or numbers builds a query string", () => {
    const mockQuery = {
      name: "jane",
      age: 35,
      pets: "dog~cat"
    }

    const expected = "?name=jane&age=35&pets=dog~cat"
    const actual = buildQueryStringFrom(mockQuery)
    expect(actual).toEqual(expected)
  })

  test("Should ignore all null values", () => {
    const mockQuery = {
      name: "jane",
      age: null,
      pets: "dog~cat"
    }

    const expected = "?name=jane&pets=dog~cat"
    const actual = buildQueryStringFrom(mockQuery)
    expect(actual).toEqual(expected)
  })

  test("Should ignore non string and non numerical values", () => {
    const mockQuery = {
      name: "jane",
      age: 35,
      pets: ["dog", "cat"],
      holidays: {location1: "eygpt", location2: "paris"}
    }

    const expected = "?name=jane&age=35"
    const actual = buildQueryStringFrom(mockQuery)
    expect(actual).toEqual(expected)
  })

  test("When query object is empty returns an empty string", () => {
    const mockQuery = {}

    const expected = ""
    const actual = buildQueryStringFrom(mockQuery)
    expect(actual).toEqual(expected)
  })
})
