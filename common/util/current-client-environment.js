const {hostname: {dev}} = require("./../config")
const {DEV, PRODUCTION} = require("./environment")

module.exports = ({hostname}) => {
  if(dev.includes(hostname)) return DEV
  return PRODUCTION
}
