module.exports = [{
  name: "set-trivia-mode",
  code: `
  $title[1;difficulty]
  $description[1; you can change the difficulty of trivia mode to other types by choosing the buttons below]
  $addButton[1;Hard;primary;trivia_hard_mode;no]
  $addButton[1;Medium;primary;trivia_medium_mode;no]
  $addButton[1;Easy;primary;trivia_easy_mode;no]
  $editIn[2m; {
 "embeds" : "{newEmbed:{title:difficulty}{description:you can change the difficulty of trivia mode to other types by choosing the buttons below}}" ,
 "components" : "{actionRow:{button:Easy:primary:trivia_easy_mode:yes}{button:Medium:primary:trivia_medium_mode:yes}{button:Hard:primary:trivia_hard_mode:yes}}"
 }]
  $onlyPerms[manageserver;you need \`MANAGE_SERVER\` permission in order to use this]
 `
},{
name: "trivia_easy_mode",
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`easy\` mode now! $setServerVar[trivia_game_mode;easy]}};{actionRow:{button:Easy:success:trivia_easy_mode:yes:}{button:Medium:primary:trivia_medium_mode:yes:}{button:Hard:primary:trivia_hard_mode:yes:}
;;no}]`

},{
  name: "trivia_medium_mode",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`medium\` mode now! $setServerVar[trivia_game_mode;medium]}};{actionRow:{button:Easy:primary:trivia_easy_mode:yes:}{button:Medium:success:trivia_medium_mode:yes:}{button:Hard:primary:trivia_hard_mode:yes:}
;;no}]`
},{
  name: "trivia_hard_mode",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:difficulty}{description:difficulty has been changed to \`hard\` mode now! $setServerVar[trivia_game_mode;hard]}};{actionRow:{button:Easy:primary:trivia_easy_mode:yes:}{button:Medium:primary:trivia_medium_mode:yes:}{button:Hard:success:trivia_hard_mode:yes:};;no}]`
}]