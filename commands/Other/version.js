module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.5.8 (2022 june 22th)**]
$description[1;
long time ago since the open source version wasn't updated, this update has huge improvements and bug fixes to the bot

**changes**
commands with buttons now automatically disable itself after certain of time of inactivity not just in mini games...
added more customization options
added akinator game
added a settings to customize akinator game (not Finished)
added a option to set difficulty of trivia \`set-trivia-mode\`
removed squares from snake game
added 5 image commands \`drip\` \`ss\`, \`changemymind\`, \`emergencymeeting\` and \`tweet\`
added 2048 game \`2048\`
update to aoi.js 5.2 release

**fixes**
fixed reverse command being not allowing user to put space after typing the first letter
fixed almost all of image commands and text modifyers commands
fixed whole kick command (now working again but different this time)
fixed prefix system being broken ;/
fixed trivia command being leading to an error code if spammed by adding cooldown for 3 seconds
fixed almost all api commands like \`github\` and \`npm\` being not returning an error if no results found by what the member searched for

**other**
added youtube info command \`youtube-info\`, for now it doesn't return much info about an video
added support command (it just dms you the invite of support server for dodo bot)
added say command \`say\`
added avatar command
added 2 text modifyers commands, \`owoify\` \`mock\`
default prefix \`+\` has been removed now, it still exists but now it's considered as a custom prefix for every guild, you can still change it using \`set-prefix\` command

**common errors**
ss command can't upload results of very certain URLS, so it uploads a file to download instead

akinator game with buttons disabled will not work if the user have disabled \`MANAGE_MESSAGES\` permission, this does not apply to akinator game with buttons enabled

using bot mention as a prefix affects half of the image commands (only commands that takes user's avatar like \`wasted\`)


]
$color[1;#673ab7]`
} // returns a list of changes in the bot code
