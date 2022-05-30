module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.5.7-patched (2022 may 29th)**]
$description[1;
NOTE: this is just a patch release to fix bugs, it won't add new features, commands, or anything else
**fixes**
fixed anti-mention being not working in set prefix command
fixed prefix command being returning nothing for custom prefix if no one set
fixed trivia command being returning a error code if spammed by adding cooldown for 3 seconds
fixed a bug where it allowed the user to set the custom prefix to the default one

]
$color[1;#673ab7]`
} // returns a list of changes in the bot code
