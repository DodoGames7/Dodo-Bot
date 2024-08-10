const config = require("../config.json");

module.exports = {
// Main variables (don't touch unless you know what you're doing)
version: "2.3.0",
versionCodename: "Cairo",
libraryversiondevcheck: "on",
release_type: "Pre-release",
DevReleaseTypeToSet: "Pre-release",
pre_release: "on",
buildNumber: "2334",
buildType: "Pre-Stable",
buildBranch: "rebase",
buildRevision: "0",
buildStatus: "Incomplete",
buildDate: "1723251060418",
exposebuildinfo: "on",
ConsoleErrors: config.EnableConsoleErrors,
AllowBotMembers: config.AllowBotMembers,
prefix: config.prefix,
botinvitationmessage: "on",
startup: "off",
startupchannel: "",
errorlogging: "off",
errorchannel: "",
embedcolor: config.Embedcolor,
originalembedcolor: config.Embedcolor,
// Game variables
trivia_type: "multiple",
trivia_difficulty: "medium",
flood_difficulty: 13,
wyr: {upvotes: 0, downvotes: 0},
// Feature variables
suggestionchannel: "",
msglogdeletechannel: "",
msglogeditchannel: "",
banlogschannel: "",
unbanlogschannel: "",
integrationchannel: "",
welcomermessage: "Welcome to the server <member.username>!",
welcomerchannel: "",
welcomertype: "text",
welcomermessageembedcolor: "#1F8B4C",
welcomersystem: "off",
leavechannel: "",
leavesystem: "off",
leavetype: "text",
leavemessageembedcolor: "#ED4245",
leavemessage: "Goodbye <member.username>! We now have <server.totalMembers> members left!",
levelingsystem: "off",
level: "1",
previouslevel: "0",
xp: "0",
xpLimit: "10",
levelingmessage: "<member.username> has leveled UP! Their new level is now <newlevel>!",
levelingmessagechannel: "",
levelingmessagefeature: "off",
levelingresetonleave: "off",
autoreplyping: "off",
anonymous: "off",
includebots: "on"
}
