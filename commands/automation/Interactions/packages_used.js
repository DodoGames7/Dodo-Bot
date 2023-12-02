module.exports = {
    type: "interaction",
    prototype: "button",
    code: `$interactionReply[;{newEmbed:{title:Packages used}{description:
        Some stuff in Dodo-Bot were made possible using certain packages. This page aims to credit all of the packages to respect their owners.

    ### Packages
    * **aoi.js**#COLON# - The entire bot basically. Dodo-Bot is made using aoi.js!
    * **@akarui/aoi.parser**#COLON# - For making interactions less complicated...
    * **discord-gamecord**#COLON#  - Mostly used in certain game commands such as \`minesweeper\`, \`snake\`, etc.
    * **@nottca/weky**#COLON# - A package that caused some of the commands here to appear such as \`calculator\`.
    * **aoi.js-library**#COLON# - For enabling extra features such as base64 encoding funcs.
    }{color:Blurple}};;;all;true]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {options:{ephemeral: true}}
  {extraOptions:{interaction: true}}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==packagesused;]
  `


}
