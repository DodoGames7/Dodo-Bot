module.exports = [{
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[{newEmbed:{author:Server information:$nonEscape[$get[serverimage]]}{title:Information for $get[username]}{field:**General**:
Joined the server on#COLON# <t:$truncate[$divide[$memberJoinDate[$get[user];$guildID];1000]]:f>
Server Booster#COLON# $isBoosting[$get[user];$guildID]
Activity: $userStatus[$guildID;$get[user]]
:true}{field:**Roles**:
Total amount of roles#COLON# $userRolesCount[$get[user];$guildID]
Highest Role#COLON# $get[highestrole]
Lowest Role#COLON# $get[lowestrole]
:true}{thumbnail:$userAvatar[$get[user]]}}{actionRow:{button:General info:2:mainmeminfo_$authorID_$get[user]:false}{button:Member's Server info:2:memberservinfo_$authorID_$get[user]:true}}]



$let[username;$advancedReplaceText[$checkCondition[$charCount[$discriminator[$get[user]]]==1];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[lowestrole;$advancedReplaceText[$checkCondition[$userLowestRole[$get[user];$guildID]==$guildID];true;None;false;$roleName[$userLowestRole[$get[user];$guildID]]]]
$let[highestrole;$advancedReplaceText[$checkCondition[$userHighestRole[$get[user];$guildID;id]==$guildID];true;None;false;$userHighestRole[$get[user];$guildID;name]]]
$let[serverimage;$advancedReplaceText[$checkCondition[$guildIcon==];false;$guildIcon;true;$userAvatar[$clientID]]]


$onlyIf[$memberExists[$get[user];$guildID]==true;
The user appears to have left the server. The ablity to view their server information in this server has been temporarily disabled until they re-join again
{ephemeral}
{interaction}
]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction} 
  ]
 $let[user;$advancedTextSplit[$interactionData[customId];_;3]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==memberservinfo;]
  
`
},{
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[{newEmbed:{title:Information for $get[username]}{field:**General**:
Joined Discord on#COLON# $creationDate[$get[user];date]
Bot account#COLON# $get[botchecker]
User ID#COLON# $get[user]
:true}{field:**Other**:
Avatar#COLON# [link]($userAvatar[$get[user]])
DMs#COLON# $get[userdms] 
:true}{thumbnail:$userAvatar[$get[user]]}}{actionRow:{button:General info:2:mainmeminfo_$authorID_$get[user]:true}{button:Member's Server info:2:memberservinfo_$authorID_$get[user]:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction} 
  ]
$let[username;$advancedReplaceText[$checkCondition[$charCount[$discriminator[$get[user]]]==1];true;$username[$get[user]];false;$userTag[$get[user]]]]
$let[botchecker;$advancedReplaceText[$checkCondition[$isBot[$get[user]]==true];true;Yes;false;No]]
$let[userdms;$advancedReplaceText[$checkCondition[$isUserDmEnabled[$get[user]]==true];true;Enabled;false;Disabled]]
$let[user;$advancedTextSplit[$interactionData[customId];_;3]]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mainmeminfo;]
  
`
}]