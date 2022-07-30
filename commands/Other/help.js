module.exports ={
  name:"help",
  code: `$title[1;Help Commands]
$description[1; select one of the options to check Commands!]
$addSelectMenu[1;help;select an required option;1;1;no;Mod:Mod Commands category!:mod:no:🛡️;Fun:Fun Commands category!:fun:no:🤣;Utility:Utility Commands category!:utility:no:⚙️;Economy:Economy Commands category!:eco:no:🤑]
$footer[1;Beta version maintained by dodoGames]
$color[1;BLURPLE]
$editIn[10m; {
 "embeds" : "{newEmbed:{title:Help Commands}{description:select one of the options to check Commands!}}" ,
 "components" : "{actionRow:{selectMenu:help:select an required option::1::1:yes:{selectMenuOptions:Mod:mod:Mod Commands category!:no:🛡️}{selectMenuOptions:Fun:fun:Fun Commands category!:no:🤣}{selectMenuOptions:Utility:utility:Utility Commands category!:no:⚙️}{selectMenuOptions:Economy:Economy Commands Category!:eco:no:🤑}}"
 }]`
} 
