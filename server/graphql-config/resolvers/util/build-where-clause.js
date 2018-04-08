const omitBy = require("lodash/fp/omitBy").convert({cap: false})
const map = require("lodash/fp/map").convert({cap: false})
const isNil = require("lodash/isNil")

function buildWhereClause(args){
  const validArgs = rejectEmptyValues(args)
  const argsList = mapToWhereParams(validArgs)
  return argsList.join(" AND ")
}

const rejectEmptyValues = omitBy((value, key) => {return isNil(value)})
const mapToWhereParams = map((value, key) => {return `${key} = '${value}'`})

module.exports = buildWhereClause
