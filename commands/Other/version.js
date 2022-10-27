module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.7.0 (2022 oct 27th)**]
$description[1;
  this version is a huge update which adds many stuff, more stuff will be completed in the next update aka 1.7.1

**changes**
added author button only
added economy
added chatbot system + poll system
added copyright icon to \`credits\`
added slash commands support (devs can choose to whether enable them or not now)
allow embeds to be used in \`say\` command (\`$getServerVar[prefix]say embedded content\`)

**fixes**
fixed a lot of bugs like mini games command arguments
fixed \`info\` being outdated since rewrite starting development
fixed errors appearing even if dev hasn't even specifed anything in dev cmds
fixed \`credit\` cmd being outdated (especially one of the authors names)
fixed automatic cooldown of disabling select menu after certain of time refusing to work and just weirdly removes the default blurple color
fixed the wrong placeholder name for select menu of \`help\` command

**other**
added \`reports\` cmd
bot now can managed by panel for devs
]
$color[1;BLURPLE]`
} // returns a list of changes in the bot code
