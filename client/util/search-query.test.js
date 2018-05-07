const searchQuery = require("./search-query").default

describe("client/util/search-query.test.js", () => {

  describe("When only 'searchTerm' is given", () => {

    test("When 'searchTerm' is null, returns an empty object", () => {
      const expected = {title: null, tags: null}
      const actual = searchQuery({searchTerm: null})
      expect(actual).toEqual(expected)
    })

    test("When 'searchTerm' is undefined, returns an empty object", () => {
      const expected = {title: null, tags: null}
      const actual = searchQuery({searchTerm: undefined})
      expect(actual).toEqual(expected)
    })

    test("When 'searchTerm' is an empty string, returns an empty object", () => {
      const expected = {title: null, tags: null}
      const actual = searchQuery({searchTerm: undefined})
      expect(actual).toEqual(expected)
    })

    test(`When 'searchTerm' is a non empty string, returns the key
    'title' with the string as the value`, () => {
      const expected = {title: "search", tags: null}
      const actual = searchQuery({searchTerm: "search"})
      expect(actual).toEqual(expected)
    })

  })

  describe("When only 'selectedTags' is given", () => {

    test("When 'selectedTags' is null, returns an empty object", () => {
      const expected = {tags: null, title: null}
      const actual = searchQuery({selectedTags: null})
      expect(actual).toEqual(expected)
    })

    test("When 'selectedTags' is undefined, returns an empty object", () => {
      const expected = {tags: null, title: null}
      const actual = searchQuery({selectedTags: undefined})
      expect(actual).toEqual(expected)
    })

    test("When 'selectedTags' is an empty array, returns an empty object", () => {
      const expected = {tags: null, title: null}
      const actual = searchQuery({selectedTags: []})
      expect(actual).toEqual(expected)
    })

    test(`When 'selectedTags' is an non empty array, returns the key 'selectedTags'
      as a string and joined by '~'`, () => {
      const expected = {tags: "tag 1~tag 2", title: null}
      const actual = searchQuery({selectedTags: ["tag 1", "tag 2"]})
      expect(actual).toEqual(expected)
    })

  })

})
