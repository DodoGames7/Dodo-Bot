module.exports = {
  type: "basicCommand",
  name: "eval",
  code: `$onlyIf[$authorID==$clientOwnerID;you're not dev]
  $onlyIf[$message!=;you need to type something to eval]
  $let[input;$message]
  $let[output;$eval[true;$message]]
  $title[1;Aoi.js Eval]
 $addField[1;input;\`\`\`$get[input]\`\`\`;false]
 $addField[1;output;\`\`\`$get[output]\`\`\`;false]
 $color[1;Green]
  
`
}
