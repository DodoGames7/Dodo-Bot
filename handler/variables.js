const config = require("../config.json");
module.exports = {
  // Games variables
  trivia_type: "multiple",
  trivia_difficulty: "medium",
  flood_difficulty: 13,
  wyr: {upvotes: 0, downvotes: 0},
  // Bot variables (do not touch)
  autopingreply: "off",
  includebots: "on",
  version: "2.1.5",
  versionCodename: "Dyanmic",
  libraryversiondevcheck: "off",
  buildStatus: "Complete",
  buildDate: "1723776590904",
  buildType: "Official Stable",
  buildBranch: "v2",
  buildRevision: "1",
  exposebuildinfo: "off",
  buildNumber: "2133",
  embedcolor: config.Embedcolor,
  originalembedcolor: config.Embedcolor,
  release_type: "Stable",
  DevReleaseTypeToSet: "Pre-release",
  prefix: config.prefix,
  originalprefix: config.prefix,
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
  leavemessageembedcolor: "#ED4245",
  leavemessage: "Goodbye <username>! We now have <server.totalMembers> members left!",
  msglogdeletedchannel: "none",
  msglogeditchannel: "none",
  banneduserschannel: "none",
  unbanneduserschannel: "none",
  anonymous: "off",
  betacommands: "off",
  betaserver: "off",
  betacommandsavailable: "no",
  levelsystem: "off",
  level: "1",
  previouslevel: "0",
  xp: "0",
  xpLimit: "10",
  levelmessage: "<username> has leveled UP! Their new level is now <newlevel>!",
  levelingmessagechannel: "none",
  levelmessagefeature: "off",
  levelleaveonreset: "off",
  islevelingreset: "no",
  // Developer variables
  errorchannel: "none",
  errorsystem: "off",
  startupchannel: "none",
  startupchannelsystem: "off",
  pre_release_mode: "off",
  botinvitationmessage: "on",
  
}
