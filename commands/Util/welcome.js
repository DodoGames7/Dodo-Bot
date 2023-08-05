module.exports = {
name: "welcome",
$if: "old",
code: `$title[Welcome System]
$description[Welcome system is an way to greet new members of your server with your own choice of the message you're going to use it for the server!

We also offer unique functions that you can use on your own welcome message such as \`<id>\`.

To get started, click on the "Enable" button!

$get[welcomesystem]
]
$color[Blurple]
$addButton[1;Welcome settings;4;welsetting_$authorID;false]
$addButton[1;Channel;1;welchannel_$authorID;false]
$addButton[1;Enable;3;enablewel_$authorID;false]
$let[welcomesystem;$replaceText[$replaceText[$getGuildVar[welcomesystem];false;*Welcome system is currently disabled*];true;*Welcome system is currently enabled*]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}