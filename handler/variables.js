const config = require("../config.json");
module.exports = {
  // games variables
  trivia_type: "multiple",
  trivia_difficulty: "medium",
  flood_difficulty: 13,
  wyr1_votes: 0,
  wyr2_votes: 0,
  // server variables
  prefix: config.prefix,
  originalprefix: config.prefix,
  // bot variables (do not touch)
  autopingreply: "off",
  includebots: "on",
  version: "2.1.0",
  buildDate: "1711026317645",
  buildType: "Pre-Beta 2",
  embedcolor: "#2A3759",
  buildNumber: "2060",
  release_type: "Pre-release",
  botgreeting: "on",
  // Feature variables
  suggestionchannel: "none",
  pollchannel: "none",
  welcomemessage: "Welcome to the server <username>!",
  welcomechannel: "none",
  welcometype: "text",
  welcomesystem: "off",
  leavechannel: "none",
  leavesystem: "off",
  leavetype: "text",
  leavemessage: "Goodbye <username>! We now have <server.totalMembers> members left!",
  msglogdeletedchannel: "none",
  msglogeditchannel: "none",
  banneduserschannel: "none",
  unbanneduserschannel: "none",
  betacommands: "off",
  betaserver: "off",
  // developer variables
  errorchannel: "none",
  errorsystem: "off",
  // smth
  pre_release_mode: "on"
  
}
