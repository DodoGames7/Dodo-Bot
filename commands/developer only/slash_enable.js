module.exports = [{
    name: "slash_enable",
    code: `$title[enabling slash commands]
    $description[before enabling slash commands feature, make sure the bot is having permissions to create slash commands if it does not have it then reinvite using this link [here]($getbotInvite)]
    $color[BLURPLE]
    $addButton[1;Enable;success;enable_$authorID;no]
    $addButton[1;Disable;danger;disable_$authorID;no]
    $onlyForIDS[$botOwnerId;you can't use this command]`
},{
    type: "interaction",
    prototype: "button",
    code: `
    
    $interactionReply[successfully Enabled Slash Commands;;;;everyone;yes]
     
     $createApplicationCommand[global;view balance;.;true;user]
    
    $createApplicationCommand[global;say;makes the bot say whatever you want;true;slash;[{
        "name": "text",
          "description": "the content of the message",
          "required": true,
          "type": "STRING" 
        },
        {
          "name": "embed",
          "description": "use embeds?",
          "required": true,
          "type": "STRING",
        "choices" : [{
        "name" : "true",
        "value" : "true"
        },{
        "name" : "false",
        "value" : "false"
        }]
        }]

$createApplicationCommand[global;support;get the link to the support server;true;slash]

    $onlyif[$get[authorID]==$interactionData[author.id];{
        "content" : "You aren't the author of this interaction.",
        "ephemeral" : true,
        "options" : { "interaction" : true }
        }]
        
        $onlyif[$get[customId]==enable;]
        
        $let[authorID;$splitText[2]]
        $let[customId;$splitText[1]] 
        $textSplit[$interactionData[customId];_] `
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[successfully Disabled Slash Commands;;;;everyone;yes]
    
    $deleteApplicationCommand[global;$getApplicationCommandID[say]]
    $deleteApplicationCommand[global;$getApplicationCommandID[support]]
    $deleteApplicationCommand[global;$getApplicationCommandID[text]]
    
    $onlyif[$get[authorID]==$interactionData[author.id];{
        "content" : "You aren't the author of this interaction.",
        "ephemeral" : true,
        "options" : { "interaction" : true }
        }]
        
        $onlyif[$get[customId]==disable;]
        
        $let[authorID;$splitText[2]]
        $let[customId;$splitText[1]] 
        $textSplit[$interactionData[customId];_]

    `
}]
