module.exports = {
name: "jseval",
info: {
    description: "Executes codes for testing (in djs only)",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["djseval"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$botOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$onlyIf[$message!=;Please eval a code.]
$!djsEval[$message]`
}
