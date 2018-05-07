import omitBy from "lodash/omitBy"
import isNil from "lodash/isNil"

export default ({searchTerm, selectedTags}) => {
  return {
    title: searchTermValue(searchTerm),
    tags: tagsValue(selectedTags)
  }
}

function searchTermValue(term){
  if(!term || term === "") return null
  return term
}

function tagsValue(tags){
  if(!tags || tags.length < 1) return null
  return tags.join("~")
}
