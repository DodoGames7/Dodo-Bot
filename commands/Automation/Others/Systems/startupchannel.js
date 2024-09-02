module.exports = {
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
}
