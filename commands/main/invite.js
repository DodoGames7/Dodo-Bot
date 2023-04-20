module.exports = {
  name: "invite",
  code: `$title[invite Dodo Bot]
  $description[Dodo Bot is an entertainment bot trying it's best to make users have fun while at the same time, provide useful cmds to the user.]
  $addButton[1;Official server;5;https://discord.gg/pFwKjAaZvj;false]
  $addButton[1;Invite;5;$nonEscape[$getBotInvite[sendmessages;readmessagehistory;viewchannel]];false]
  $cooldown[2s;slow down, don't spam the command]
  `
}