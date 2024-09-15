module.exports = [{
    type: "ready",
    code: `$if[$getGlobalVar[pre_release]==on;
$djsEval[const chalk = require('chalk')

console.log(chalk.red("Development build has been detected!\\\\n Using Development builds are not recommended for public usage as they may contain bugs and as such It is advised to try them for testing purposes only!"))]
]
$wait[2000]
$log[Dodo-Bot v$getGlobalVar[version]$if[$getGlobalVar[pre_release]==on; (build $getGlobalVar[buildNumber])] is ready to be used on the client $userTag[$clientID]!]
$djsEval[const chalk = require('chalk')

console.log(chalk.yellow("Tip: Found an issue? Report it here: https://github.com/DodoGames7/Dodo-Bot/issues/new"))
]

$djsEval[const chalk = require('chalk')

console.log(chalk.cyan("Invite your bot here: $clientInvite[36032]"))]
`
},{
type: "ready",
code: `$onlyIf[$getGlobalVar[startupsystem]==on;]
$onlyIf[$getGlobalVar[startupchannel]!=;]
$onlyIf[$channelExists[$getGlobalVar[startupchannel]]==true;]
$onlyIf[$channelHasPerms[$getGlobalVar[startupchannel];$clientID;ViewChannel;SendMessages]==true;]
$sendMessage[$getGlobalVar[startupchannel];
$title[Ready!]
$description[$username[$clientID] is now online!]
$color[DarkGreen]
]

`
}]
