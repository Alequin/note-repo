const unixCommand = require("./util/unix-command")

async function dropDatabase(name){
  await unixCommand(`dropdb ${name}`)
}

module.exports = dropDatabase
