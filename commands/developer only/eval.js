module.exports ={
    name:"eval",
    code: `
    $eval[$message]
    $onlyIf[$message!=;you need to evaluate something such as aoi func]
    $onlyForIDs[$botOwnerID;only $username[$BotOwnerID] can execute this command]
    `} // allows excuting a code for testing purposes