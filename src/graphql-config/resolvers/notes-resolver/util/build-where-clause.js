const omitBy = require("lodash/fp/omitBy")
const map = require('lodash/map')
const isNil = require("lodash/isNil")

function buildWhereClause(args, options = {}){
  const validArgs = rejectEmptyValues(args)
  const argsList = mapToWhereParams(validArgs, options.ignoreCase)
  return argsList.join(" AND ")
}

const rejectEmptyValues = omitBy(isNil)
const mapToWhereParams = (args, ignoreCase) => {
  return map(args, (value, key) => {
    return ignoreCase ?
      `LOWER(${key}) = LOWER('${value}')` :
      `${key} = '${value}'`}
  )
}

module.exports = buildWhereClause
