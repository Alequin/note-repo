import reduce from "lodash/reduce"
import isString from "lodash/isString"
import isInteger from "lodash/isInteger"

export default (query) => {
  const queryList = reduce(query, appendQueryParam, [])
  return queryList.length > 1 ? "?" + queryList.join("&") : ""
}

function appendQueryParam(queryList, value, key){
  return isValidParam(value) ? [...queryList, `${key}=${value}`] : queryList
}

function isValidParam(value){
  return value && (isString(value) || isInteger(value))
}
