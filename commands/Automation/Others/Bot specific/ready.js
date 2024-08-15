module.exports = [{
  name: "Startup Message (Console)",
  type: "ready",
  channel: "",
  code: `
$djsEval[const chalk = require('chalk')

console.log(chalk.cyan("Invite Your bot using this link: $getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]"))
]
$djsEval[const chalk = require('chalk')

console.log(chalk.yellow("Tip: Found an issue? Report it here: https://github.com/DodoGames7/Dodo-Bot/issues/new"))
]
$log[Dodo Bot v$getVar[version]$if[$getVar[pre_release_mode]==on; (build $getVar[buildNumber])] is ready to be used on the client $userTag[$clientID]!]
$wait[2s]
$ifAwaited[$getVar[pre_release_mode]==on;{execute:showdevwarning}]`
},{
    name: "showdevwarning",
    type: "awaited",
    code: `$djsEval[const chalk = require('chalk')

console.log(chalk.red("Development build has been detected!\\nUsing Development builds are not recommended for public usage as they may contain bugs and such. It is advised to try them for testing purposes only!"))]`
}]
