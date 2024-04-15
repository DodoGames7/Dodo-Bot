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
  buildDate: "1713156977280",
  buildType: "Pre-Beta 2",
  buildRevision: "0",
  embedcolor: "#2A3759",
  buildNumber: "2066",
  release_type: "Pre-release",
  botgreeting: "on",
  // Feature variables
  suggestionchannel: "none",
  pollchannel: "none",
  welcomemessage: "Welcome to the server <username>!",
  welcomechannel: "none",
  welcometype: "text",
  welcomemessageembedcolor: "#1F8B4C",
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
  levelsystem: "off",
  level: "1",
  xp: "0",
  xpLimit: "10",
  levelmessage: "<username> has Leveled UP! Their New Level is now <level>!",
  levelingmessagechannel: "none",
  levelmessagefeature: "off",
  // developer variables
  errorchannel: "none",
  errorsystem: "off",
  // smth
  pre_release_mode: "on"
  
}
