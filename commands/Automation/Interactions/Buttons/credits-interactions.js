module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Packages used}{description:
        Some stuff in Dodo-Bot were made possible using certain packages. This page aims to credit all of the packages to respect their owners.}{field:Packages:
* **aoi.js** - The entire bot basically. Dodo-Bot is made using aoi.js!
* **@aoijs/aoi.db** - Database used in the bot
* **discord-gamecord** - Mostly used in game commands such as \`minesweeper\`, \`snake\`, etc.
* **chalk** - For colored texts on console especially the bot's custom message}
* **dotenv** - Better environment variables support in local hosting
{field:No longer used:
* **@akarui/aoi.parser** - For making interactions less complicated...
* **@nottca/weky** - A package that caused some of the commands here to appear.
* **@akarui/aoi.plugins** - For enabling extra features such as base64-related functions.
}{color:$getVar[embedcolor]}}{actionRow:{button:Main Credits:2:maincredits_$authorID:false}{button:Packages used:2:packagesused_$authorID:true}{button:Use of source code:2:useofsource_$authorID:false}}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==packagesused;]
  `
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Dodo-Bot Credits}{description:
* $username[632607624742961153] - Developer of the bot
* $username[431749535656837130] - Inspiration to improve some commands
* $username[738856854892839022] - For Leveling setup
* $username[769525910164471821] - For \`guess-the-pokemon\` code (and some ideas as well)
}{color:$getVar[embedcolor]}}{actionRow:{button:Main Credits:2:maincredits_$authorID:true}{button:Packages used:2:packagesused_$authorID:false}{button:Use of source code:2:useofsource_$authorID:false}}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==maincredits;]
  `
},{
    type: "interaction",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Use of source code}{description:
When using the source code for development purposes, it is recommended to give credits to the original work done on the bot itself, which can be done by including the username \`dodogames\` in your project.

**For public bots**
It is not recommended to claim that you fully made the bot yourself and even advertise it to the public. It is fine if you used the source code but then made it slightly different that doesn't result in being too smiliar to the original bot.

A modified instance of Dodo-Bot should be normally allowed as long as the credit for the original work is included (or when permission is given to do so).

**For private bots**
The rule of using the source code is not strict in this case. If it's used to try the bot then you do not need to do anything. You may give credit if the said private bot was designed for a server in case of modifying it.
}{color:$getVar[embedcolor]}}{actionRow:{button:Main Credits:2:maincredits_$authorID:false}{button:Packages used:2:packagesused_$authorID:false}{button:Use of source code:2:useofsource_$authorID:true}}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];This interaction is not for you.
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==useofsource;]
  `
}]
