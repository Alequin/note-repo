const currentClientEnvironment = require("./current-client-environment")
const {hostname: {dev}} = require("./../config")

module.exports = (currentLocation) => {
  if(currentClientEnvironment(currentLocation)) {
    return isDevHomeRoute(currentLocation.href)
  }
}

function isDevHomeRoute(href){
  return href === dev
}
