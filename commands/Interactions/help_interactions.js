module.exports = {
  name: "help",
  type: "interaction",
  $if: "v4",
  prototype: "selectMenu",
  code: `$if[$message==mod]
$interactionUpdate[;{newEmbed:{title:**🛡 Mod**}{field:Actions:\`kick\` \`purge\` \`setnick\` \`timeout\` \`untimeout\`
:no}{field:Other Moderation Tools:\`serverinfo\`:no};{actionRow:{selectMenu:help:Select an Category:1:1:no:{selectMenuOptions:Mod:mod:Mod Commands category!:no:🛡}{selectMenuOptions:Fun:fun:Fun Commands category!:no:🤣}{selectMenuOptions:Utility:utility:Utility Commands category!:no:⚙️}}
;;no}]
$endif
$if[$message==fun]
$interactionUpdate[;{newEmbed:{title:**🤣 Fun**}{field:images:\`eject\` \`jail\` \`comment\` \`wasted\` \`triggered\` \`drip\` \`screenshot\` \`tweet\` \`emer\` \`gun\` \`drake\` \`delete\` \`f\` \`wanted\`
:no}{field:Mini Games:\`rps\` \`snake\` \`connectfour\` \`trivia\` \`tictactoe\` \`akinator\` \`2048\` \`football\` \`flood\` \`fast-click\`:no}{field:text modifyers:\`reverse\` \`mock\` \`owoify\`:no}{field:Other Fun Stuff:\`fact-animals\` \`token\` \`8ball\` \`randomtopic\`:no};{actionRow:{selectMenu:help:Select an Category:1:1:no:{selectMenuOptions:Mod:mod:Mod Commands category!:no:🛡}{selectMenuOptions:Fun:fun:Fun Commands category!:no:🤣}{selectMenuOptions:Utility:utility:Utility Commands category!:no:⚙️}}
;;no]
$endif
$if[$message==utility]
$interactionUpdate[;{newEmbed:{title:**⚙️ Utilty**}{field:Misc:\`fact\` \`av\`:no}{field:getting information:\`npm\` \`github\` \`youtube\` \`mcserver\` \`weather\` \`djs\`:no}{field:customization:\`set-prefix\` \`reset-prefix\` \`akinator-options\` \`set-trivia-mode\`:no}{field:bot itself:\`stats\` \`info\` \`ver\` \`prefix\` \`support\` \`credits\`:no};{actionRow:{selectMenu:help:Select an Category:1:1:no:{selectMenuOptions:Mod:mod:Mod Commands category!:no:🛡}{selectMenuOptions:Fun:fun:Fun Commands category!:no:🤣}{selectMenuOptions:Utility:utility:Utility Commands category!:no:⚙️}}
;;no}]
$endif`
}
