const sys = require("util")
const {exec} = require("child_process")

const DIVIDER = "--------------------"

async function unixCommand(command){
  return await new Promise((resolve, reject) => {
    const child = exec(command, function (error, stdout, stderr) {
      logResult(command, stdout, stderr, error);
      resolve({
        stdout,
        stderr,
        error,
      })
    })
  })
}

function logResult(cmd, stdout, stderr, error){
  console.log(
    `${DIVIDER}\n`+
    `command: ${cmd}\n`+
    `stdout: ${stdout}\n`+
    `stderr: ${stderr}\n`+
    `error: ${error ? error : `no error`}\n`+
    `${DIVIDER}`
  )
}

module.exports = unixCommand
