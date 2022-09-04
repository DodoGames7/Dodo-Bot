module.exports = {
  type: "basicCommand",
  name: "reload",
  aliases: ["restart", "cmd-update", "update-commands"],
  code: `$let[update;$updateCommands]
  $onlyIf[$authorID==$clientOwnerID;you're not dev]
  updated commands!
`
}