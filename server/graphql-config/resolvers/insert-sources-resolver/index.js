const insertSources = require("./insert-sources")

async function insertSourcesResolver(parent, {sources}){
  return await insertSources(sources)
}

module.exports = insertSourcesResolver
