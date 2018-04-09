const omitBy = require("lodash/fp/omitBy").convert({cap: false})
const map = require("lodash/fp/map").convert({cap: false})
const isNil = require("lodash/isNil")

function buildWhereClause(args, options = {}){
  const validArgs = rejectEmptyValues(args)
  const argsList = mapToWhereParams(validArgs, options.ignoreCase)
  return argsList.join(" AND ")
}

const rejectEmptyValues = omitBy((value, key) => {return isNil(value)})
const mapToWhereParams = (args, ignoreCase) => {
  return map((value, key) => {
    return ignoreCase ?
      `LOWER(${key}) = LOWER('${value}')` :
      `${key} = '${value}'`}
  )(args)
}

module.exports = buildWhereClause
