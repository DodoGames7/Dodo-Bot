module.exports = {
type: "ready",
code: `$onlyIf[$getGlobalVar[startup]==on;]
$onlyIf[$getGlobalVar[startupchannel]!=;]
$onlyIf[$channelExists[$getGlobalVar[startupchannel]]==true;]
$onlyIf[$channelHasPerms[$getGlobalVar[startupchannel];$botID;ViewChannel;SendMessages]==true;]
$sendMessage[$getGlobalVar[startupchannel];
$title[Ready!]
$description[$username[$botID] is now online!]
$color[DarkGreen]
]

`
}