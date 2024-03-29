module.exports = {
name: "Log Errors",
type: "functionError",
channel: "$getVar[errorchannel]",
code: `$author[Error detected!;$userAvatar[$clientID]]
$description[**Error code**:
$handleError[error]
]
$addField[**Information**;
The function: \`$handleError[function]\`
Command name: \`$get[commandname]\`
Server id: \`$guildID\`
Server name: \`$guildName\`
]
$color[Yellow]
$footer[Date since it occurred]
$addTimestamp
$let[commandname;$replaceText[$replaceText[$checkCondition[$handleError[command]==];true;undefined];false;$handleError[command]]]
 $onlyIf[$hasPermsInChannel[$getVar[errorchannel];$clientID;sendmessages;viewchannel]==true;]
 $onlyIf[$getVar[errorchannel]!=none;]
 $onlyIf[$getVar[errorsystem]==on;]

`
}