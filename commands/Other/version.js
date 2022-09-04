module.exports ={
  type: "basicCommand",
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 2.0.0-beta-1 (2022 sep 2th)**]
$description[1;
**changes**
added \`caution\` command
updated some commands to reflect v6 changes

**other**
improve eval to use embeds now
rename \`djsEval\` cmd to \`jsEval\` now
changed sub command names for \`restart\` cmd
list bot version in \`stats\` cmd not just in version cmd and in package.json file
set aoi.panel mode to v6 so it can be usable too
]
$color[1;Blurple]`
} // returns a list of changes in the bot code