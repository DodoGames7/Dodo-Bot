module.exports = {
    name: "exec",
    code: `
    \`\`\`js
    $exec[$message] 
    \`\`\`
    $onlyForIDS[$botOwnerID;only $username[$BotOwnerID] can execute this command]
    `
}