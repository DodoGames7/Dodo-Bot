const config = require("./config.json");
module.exports = {
  // games variables
  trivia_type: "multiple",
  trivia_difficulty: "medium",
  flood_difficulty: 13,
  // server variables
  prefix: config.prefix,
  originalprefix: config.prefix,
  // bot variables (do not touch)
  autopingreply: "false",
  includebots: "true",
  // system variables
  suggestionchannel: "none",
  pollchannel: "none",
  welcomemessage: "undefined",
  welcomechannel: "none",
  welcometype: "text",
  welcomesystem: "false",
  leavechannel: "none",
  leavesystem: "false",
  leavetype: "text",
  leavemessage: "undefined",
  msglogdeletedchannel: "none",
  msglogeditchannel: "none",
  banneduserschannel: "none",
  unbanneduserschannel: "none",
  betacommands: "false",
  betaserver: "false"
  
}