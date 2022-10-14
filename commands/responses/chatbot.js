module.exports = {
    name: "$alwaysExecute",
    code: `$jsonRequest[https://api.popcat.xyz/chatbot?msg=$uri[$message;encode]&owner=$uri[$username[$botOwnerid];encode]&botname=$uri[$username[$clientID];encode];response]
    
    
    $onlyForChannels[$getServerVar[chatbot];]
    `
    }