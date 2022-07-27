module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.5.9 (2022 july 26th)**]
$description[1;
**INTRODUCING LOGS**
Logs are an useful moderation tool to get info about server activity, currently there is only one available feature which is deleted logs, a way to post logs of deleted messages, this is helpful especially if you're a moderator of a server
to start, simply run \`$getServerVar[prefix]set-delete <#channel>\`, it's recommended to be private and the bot must have \`SEND_MESSAGES\` perm there!

**changes**
added 4 new mini games such as \`flood\`, \`football\`, \`fast-click\` and lastly \`wordle\`
update to the latest version of aoi.js (v5.5.5)
use select menu instead of buttons in help commands
akinator language option has been officiaily enabled
add \`djs\` and \`mcserver\` command
added more image commands such as \`f\`, \`delete\` and \`drake\`
added randomtopic command \`randomtopic\`

**fixes**
fixed grammar of utility name of utility menu
fixed 8ball command being suddenly stopped working
fixed support command being broken if user has dms closed
fixed an bug where it allowed users to change prefix to same thing

**other**
added calculator command \`calculator\`
update node.js v16 LTS to the latest version (v16.16.0)
added credits command \`credits\`
added emojify command \`emojify\`
]
$color[1;BLURPLE]`
} // returns a list of changes in the bot code
