module.exports = {
name: "comment",
code: `$attachment[https://some-random-api.com/canvas/misc/youtube-comment?username=$uri[$username;encode]&avatar=$replaceText[$replaceText[$authorAvatar;.webp;.png];.gif;.png]&comment=$uri[$message;encode];comment.png;url]
$onlyIf[$charCount[$message]<=56;Your comment can't be longer than 56 characters!]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$message!=;Please Type something.]
$onlyIf[$getGlobalUserVar[betacommands]==true;You're not a beta tester to use this command currently!
To use this command, please opt in for the beta commands by running \`beta\` command.]
$onlyIf[$getGuildVar[betaserver]==true;]
`
}