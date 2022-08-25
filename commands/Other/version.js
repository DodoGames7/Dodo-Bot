module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.5.9-patched (2022 Aug 26th)**]
$description[1;
*NOTE: this release is an patch to fix certain stuff of dodo bot to bring stability*

**bug fixes**
fixed weather command being returning failed result if user didn't even specify anything such as city
fixed emojify command being missing of help fun menu cmd
fix non-existing moderation cmds being listed for some reason
fixed grammar of mcserver cmd error
]
$color[1;BLURPLE]`
} // returns a list of changes in the bot code
