module.exports = {
  name: "invite",
  info: {
    description: "Returns a link to invite the bot.",
    perms: ["`SendMessages`"]
},
  code: `$title[invite Dodo Bot]
  $description[To invite the bot into a server, click on the "Invite" button below.]
  $color[$getVar[embedcolor]]
  $addButton[1;Official server;5;https://discord.gg/pFwKjAaZvj;false]
  $addButton[1;Invite;5;$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]];false]
  $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;invite;$authorID];$dateStamp];1000]]:R>]
  `
}
