module.exports ={
  type: "basicCommand",
  name:"help",
  code: `$title[1;Help Commands]
$description[1; under construction]
$addActionRow
$addSelectMenu[help;Select an Category!;1;1;false]
$addSelectMenuOption[Mod;Mod Commands Category!;mod;🛡;false]
$addSelectMenuOption[Fun;Fun Commands Category!;fun;🤣;false]
$addSelectMenuOption[config;configure on how the bot should work!;config;⚠;false]
$footer[1;v2 maintained by dodoGames]
$color[1;Blurple]
`
} 
