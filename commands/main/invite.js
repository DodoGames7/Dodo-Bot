module.exports = {
  name: "invite",
  executeAt: "both",
  code: `$title[invite Dodo Bot]
  $description[Dodo Bot is an entertainment bot trying it's best to make users have fun while at the same time, provide useful cmds to the user.

**Links you might want to check out**
[Dodo-Bot is no longer multi-purpose](https://github.com/DodoGames7/Dodo-Bot/tree/v2#its-no-longer-multi-purpose)
[Askers](https://discord.ly/askers)
]
  $addButton[1;Official server;5;https://discord.gg/pFwKjAaZvj;false]
  $addButton[1;Invite;5;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions]];false]
  $cooldown[2s;slow down, don't spam the command]
  `
}