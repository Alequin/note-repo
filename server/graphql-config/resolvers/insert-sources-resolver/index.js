const insertSources = require("./insert-sources")

async function insertSourcesResolver(_parent, {sources}){
  return await insertSources(sources)
}

module.exports = insertSourcesResolver
