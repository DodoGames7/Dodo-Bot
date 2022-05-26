module.exports ={
  name:"version",
  aliases:["updates","news","ver"],
  code: `$title[1;** ⚙️Version: 1.5.7 (2022 may 26th)**]
$description[1;
**Changes**
merged all fact-animal commands into one place (\`fact-animals\`)
added a testing nsfw detector system (experimental, may not work sometimes), for now it's not enabled
added custom prefix feature, to set one, use \`set-prefix\`, and to reset, use \`reset-prefix\`, you can also view the prefix using \`prefix\` command
util command section is finally no longer returning the "currently work in progess"
added reverse command (\`reverse\` + part of fun category)
added fact command (\`fact\`)
you can now search for npm packages, as well as github usernames using \`npm\` and \`github\`
added sub command for connectfour (\`c4\`)

**bug fixes**
fixed interaction failed errors in help command
fixed bug of mod commands where it allowed the user to punish themselves

**common errors**
sometimes, spamming trivia command just drops a error code, but in some rare cases, it drops a "interaction failed" error if author tried to press a button
anti-mention is working for set-prefix command but not with roles (tested in a secret server)
searching for information that didn't exist does not return a error but instead, drops a embed with a wall of "undefined", for github command, it does not respond but rather than dropping a error to the bot's console
if apis were down, then bot will drop a file to download instead (applies to eject command)

]
$color[1;#673ab7]`
} // returns a list of changes in the bot code
