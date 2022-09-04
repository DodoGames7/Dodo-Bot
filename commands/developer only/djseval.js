module.exports = {
  type: "basicCommand",
  name: "jseval",
  code: `$onlyIf[$authorID==$clientOwnerID;you're not dev]
  $onlyIf[$message!=;you need to type something to eval]
  $djsEval[true;$message]
  `
}