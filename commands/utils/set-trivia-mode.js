module.exports = [{
  name: "set-trivia-mode",
  code: `
  $title[1;difficulty]
  $description[1; you can change the difficulty of trivia mode to other types by choosing the buttons below]
  $addButton[1;Hard;primary;triviahard_$authorID;no]
  $addButton[1;Medium;primary;triviamedium_$authorID;no]
  $addButton[1;Easy;primary;triviaeasy_$authorID;no]
  $editIn[2m; {
 "embeds" : "{newEmbed:{title:difficulty}{description:you can change the difficulty of trivia mode to other types by choosing the buttons below}}" ,
 "components" : "{actionRow:{button:Easy:primary:triviaeasy:yes}{button:Medium:primary:triviamedium:yes}{button:Hard:primary:triviahard:yes}}"
 }]
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
 `
},{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`easy\` mode now! $setServerVar[trivia_game_mode;easy]}};{actionRow:{button:Easy:success:triviaeasy_$get[authorID]:yes:}{button:Medium:primary:triviamedium_$get[authorID]:yes:}{button:Hard:primary:triviahard_$get[authorID]:yes:}
;;no}]

$onlyif[$get[authorID]==$interactionData[author.id];{
  "content" : "You aren't the author of this interaction.",
  "ephemeral" : true,
  "options" : { "interaction" : true }
  }]
  
  $onlyif[$get[customId]==triviaeasy;]
  
  $let[authorID;$splitText[2]]
  $let[customId;$splitText[1]] 
  $textSplit[$interactionData[customId];_]
  `

},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`medium\` mode now! $setServerVar[trivia_game_mode;medium]}};{actionRow:{button:Easy:primary:triviaeasy_$get[authorID]:yes:}{button:Medium:success:triviamedium_$get[authorID]:yes:}{button:Hard:primary:triviahard_$get[authorID]:yes:}
;;no}]

$onlyif[$get[authorID]==$interactionData[author.id];{
  "content" : "You aren't the author of this interaction.",
  "ephemeral" : true,
  "options" : { "interaction" : true }
  }]
  
  $onlyif[$get[customId]==triviamedium;]
  
  $let[authorID;$splitText[2]]
  $let[customId;$splitText[1]] 
  $textSplit[$interactionData[customId];_]`
},{
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`hard\` mode now! $setServerVar[trivia_game_mode;hard]}};{actionRow:{button:Easy:primary:triviaeasy_$get[authorID]:yes:}{button:Medium:primary:triviamedium_$get[authorID]:yes:}{button:Hard:success:triviahard_$get[authorID]:yes:};;no}]
  
  $onlyif[$get[authorID]==$interactionData[author.id];{
    "content" : "You aren't the author of this interaction.",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]
    
    $onlyif[$get[customId]==triviahard;]
    
    $let[authorID;$splitText[2]]
    $let[customId;$splitText[1]] 
    $textSplit[$interactionData[customId];_]`
}]