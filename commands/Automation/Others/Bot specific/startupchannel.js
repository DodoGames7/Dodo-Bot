module.exports = {
    name: "Startup Message (Channel)",
    type: "ready",
    channel: "",
    code: `$title[Ready!]
    $description[$username[$clientID] is now running!]
    $color[DarkGreen]
    $useChannel[$getVar[startupchannel]]
    
    $onlyIf[$hasPermsInChannel[$getVar[startupchannel];$clientID;sendmessages;viewchannel]==true;]
    $onlyIf[$getVar[startupchannelsystem]==on;]
    $onlyIf[$getVar[startupchannel]!=none;]`
    }