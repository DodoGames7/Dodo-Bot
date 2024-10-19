module.exports = [{
    name: "User app support decider",
    type: "ready",
    code: `$ifAwaited[$getVar[userapps]==true;{execute:createuserapps}]`
},{
    name: "createuserapps",
    type: "awaited",
    code: `
$createApplicationCommand[global;randomcolor;Returns random color you can use;sendmessages;user;all;slash]
$createApplicationCommand[global;invite;Returns a link to invite the bot;sendmessages;user;all;slash]
$createApplicationCommand[global;report;Returns a link to report issues on Dodo-Bot's GitHub repo;sendmessages;user;all;slash]
$createApplicationCommand[global;about;Returns information about Dodo-Bot;sendmessages;user;all;slash]

$createApplicationCommand[global;reverse;Let's you reverse a text;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to reverse",
    "required": true
  }
]]

$createApplicationCommand[global;owoify;Adds owoify style to your text;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "text",
    "description": "Text to owoify",
    "required": true
  }
]]

$createApplicationCommand[global;8ball;Ask a question to 8ball;sendmessages;user;all;slash;[
  {
    "type": 3,
    "name": "question",
    "description": "The question to ask 8ball about",
    "required": true
  }
]]

$djsEval[const chalk = require('chalk')

console.log(chalk.green("Successfully created user apps! Restart your Discord to see them"))
]

$setVar[isuserappsalreadysetup;yes]
$onlyIf[$getVar[isuserappsalreadysetup]==no;]`
}]
