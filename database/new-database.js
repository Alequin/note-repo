const unixCommand = require("./util/unix-command")

async function newDatabase(name){
  await unixCommand(`createdb ${name}`)
}

module.exports = newDatabase
