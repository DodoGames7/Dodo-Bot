module.exports = {
  name: "version",
  aliases: ["ver", "changelog", "updates"],
  code: `$title[Dodo-Bot version]
  $description[
  * **Version**: $getVar[version]
  * **Release type**: $getVar[release_type]
  * **Build created on**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
  
  Check changes of the version by using the buttons below.
  ]
  $color[$getVar[embedcolor]]
  $addButton[2;Version history;5;https://github.com/DodoGames7/Dodo-Bot/releases;false;🔎]
  $addButton[1;Other;2;versionother_$authorID;false]
  $addButton[1;Bug Fixes;2;versionbugfixes_$authorID;false]
  $addButton[1;Changes;2;versionchanges_$authorID;false]
  $cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;version;$authorID];$dateStamp];1000]]:R>]
  `
}
