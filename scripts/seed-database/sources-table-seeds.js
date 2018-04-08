const map = require("lodash/fp/map")
const {sourcesSchema} = require("./../../database/schema.js")

const {
  columns: {
    name,
    type,
    location
  }
} = sourcesSchema

const sourceSeeds = Object.freeze([
  {
    [name.name]: "source 1",
    [type.name]: "Internet",
    [location.name]: "www.a.com"
  },
  {
    [name.name]: "source 2",
    [type.name]: "Book",
    [location.name]: "N/A"
  },
  {
    [name.name]: "source 3",
    [type.name]: "Internet",
    [location.name]: "www.z.com"
  },
  {
    [name.name]: "source 4",
    [type.name]: "Book",
    [location.name]: "N/A"
  },
])

function sourcesInsertValues(){
  return map((source) => {
    return [source[name.name], source[type.name], source[location.name]]
  })(sourceSeeds)
}

module.exports = sourcesInsertValues()
