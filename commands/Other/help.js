module.exports ={
  name:"help",
  code: `$title[1;Help Commands]
$description[1; select one of the buttons to check Commands!]
$addButton[1;Utility;secondary;utility;no;⚙️]
$addButton[1;Fun;secondary;fun;no;🤣]
$addButton[1;Mod;secondary;mod;no;🛡]
$footer[1;Rewrite version maintained by dodoGames]
$color[1;#673ab7]
$editIn[10m; {
 "embeds" : "{newEmbed:{title:Help Commands}{description:select one of the buttons to check Commands!}}" ,
 "components" : "{actionRow:{button:Mod:secondary:mod:yes:🛡}{button:Fun:secondary:fun:yes:🤣}{button:Utility:secondary:utility:yes:⚙️}}"
 }]`
} 