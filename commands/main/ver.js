module.exports = {
  name: "version",
  executeAt: "both",
  aliases: "ver",
  code: `$title[Dodo-Bot version]
  $description[
  * **Version**: $filterMessage[$getVar[botversion];-dev]
  * **Release type**: Dev (see \`$getGuildVar[prefix]gitbuilds\` for more information)
  * **Date of build**: <t:$truncate[$divide[1701463715821;1000]]:f>
  
  Check changes of the version by using the buttons below.

⚠️ **For Testing purposes only** ⚠️
  ]
  $color[Blurple]
  $addButton[1;Full Changelog;5;https://github.com/DodoGames7/Dodo-Bot/releases;false]
  $addButton[1;Other;2;versionother_$authorID;false]
  $addButton[1;Bug Fixes;3;versionbugfixes_$authorID;false]
  $addButton[1;Changes;1;versionchanges_$authorID;false]
  $cooldown[2s; Slow down! Don't spam the command!
Time left: \`%time%\`]
  `
}
