module.exports = {
name: "execute",
info: {
    description: "Runs terminal commands directly in Discord",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["exec"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$onlyIf[$message!=;Send something to execute.]
$if[$charCount[$exec[$message]]>=2000;
$attachment[$exec[$message];output.txt;true]
;
$codeBlock[$exec[$message]]
]`
}
