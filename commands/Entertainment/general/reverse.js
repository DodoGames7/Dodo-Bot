module.exports = {
  name: "reverse",
  executeAt: "both",
  code: `$nonEscape[$reverse[$message]]
  $onlyIf[$message!=;Please, say something to be reversed.]
  $cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$getGlobalUserVar[betacommands]==true;You're not a beta tester to use this command currently!
To use this command, please opt in for the beta commands by running \`beta\` command.]
`
}