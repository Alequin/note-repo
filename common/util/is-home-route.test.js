
const isHomeRoute = require("./is-home-route")
const config = require("./../config")

const PORT = config.serverConfig.port



describe("common/util/is-home-route.js", () => {
  describe("When the environment is dev", () => {
    test("Should return true when given location.href matches the dev hostname", () => {
      const location = {
        hostname: `localhost:${PORT}`,
        href: `http://localhost:${PORT}`
      }

      const expected = true
      const actual = isHomeRoute(location)
      expect(actual).toEqual(expected)
    })

    test("Should return false when given location.href does not matches the dev hostname", () => {
      const location = {
        hostname: `localhost:${PORT}`,
        href: `http://localhost:${PORT}/note`
      }

      const expected = false
      const actual = isHomeRoute(location)
      expect(actual).toEqual(expected)
    })
  })
})
