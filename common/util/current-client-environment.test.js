
const currentClientEnvironment = require("./current-client-environment")
const {DEV, PRODUCTION} = require("./environment")
const config = require("./../config")

const PORT = config.serverConfig.port

describe("common/util/current-client-environment.js", () => {
  test("When the environment is dev returns true environment.DEV", () => {
    const location = {
      hostname: `localhost:${PORT}`
    }

    const expected = DEV
    const actual = currentClientEnvironment(location)
    expect(actual).toEqual(expected)
  })

  test("When the environment is not dev returns true environment.PRODUCTION", () => {
    const location = {
      hostname: `www.site.com`
    }

    const expected = PRODUCTION
    const actual = currentClientEnvironment(location)
    expect(actual).toEqual(expected)
  })
})
