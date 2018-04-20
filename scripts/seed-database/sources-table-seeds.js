const map = require("lodash/fp/map")
const {sourcesSchema} = require("_common/database/schema")

const {
  columns: {
    name,
    islink,
    location
  }
} = sourcesSchema

const sourceSeeds = Object.freeze([
  {
    [name.name]: "source 1",
    [islink.name]: true,
    [location.name]: "www.a.com"
  },
  {
    [name.name]: "source 2",
    [islink.name]: false,
    [location.name]: "N/A"
  },
  {
    [name.name]: "source 3",
    [islink.name]: true,
    [location.name]: "www.z.com"
  },
  {
    [name.name]: "source 4",
    [islink.name]: false,
    [location.name]: "N/A"
  },
])

function sourcesInsertValues(){
  return map((source) => {
    return [source[name.name], source[islink.name], source[location.name]]
  })(sourceSeeds)
}

module.exports = sourcesInsertValues()
