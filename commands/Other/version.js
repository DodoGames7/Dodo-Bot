module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.7.0 (2022 sep 14th)** **(Final Beta)**]
$description[1;
  note: this version includes a lot of changes after two months of developing

**changes**
added author button only
added economy
added chatbot system + poll system
added copyright icon to \`credits\`
added slash commands support (devs can choose to whether enable them or not now)
allow embeds to be used in \`say\` command (`\$getServerVar[prefix]say embedded content\`)

**fixes**
fixed a lot of bugs like mini games command arguments
fixed \`info\` being outdated since rewrite starting development
fixed errors appearing even if dev hasn't even specifed anything in dev cmds
fixed \`credit\` cmd being outdated (especially one of the authors names)

**other**
added \`reports\` cmd
]
$color[1;BLURPLE]`
} // returns a list of changes in the bot code
