module.exports = {
name: "leave",
$if: "old",
code: `$title[Leave System]
$description[Leave System just like welcome system is an way to setup an channel where the bot says goodbye to members leaving your server!

Just like welcome system, we also offer unique functions as well!

To get started, click on the "Enable" button!

$get[leavesystem]
]
$color[Blurple]
$addButton[1;Test Leave;2;leavetest_$authorID;false]
$addButton[1;Leave settings;4;leavesetting_$authorID;false]
$addButton[1;Channel;1;leavechannel_$authorID;false]
$addButton[1;Enable;3;enableleave_$authorID;false]
$let[leavesystem;$replaceText[$replaceText[$getGuildVar[leavesystem];false;*Leave system is currently disabled*];true;*Leave system is currently enabled*]]
$onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
`
}