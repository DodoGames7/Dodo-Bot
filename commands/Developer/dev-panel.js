module.exports = {
name: "dev-panel",
info: {
    description: "Allows you to access Developer panel!",
    perms: ["`SendMessages`"],
    dev: "true"
},
aliases: ["devpanel", "developer-panel", "dev-settings"],
type: "messageCreate",
code: `$onlyIf[$checkContains[$clientOwnerID[$getGlobalVar[AllowBotMembers]];$authorID]==true;]
$title[Developer panel]
$description[Welcome to Developer panel! This panel allows you to change some stuff in the bot!

To change something such as Embed color, use the select menu below.]  
$color[Yellow]
$attachment[./handlers/assets/gear.png;gear.png]
$thumbnail[attachment://gear.png]
$addActionRow
$addStringSelectMenu[devmenu_$authorID;Select a option;false;1;1]
$addOption[Bot Invitation Message;Whether or not to greet servers the bot gets added to;botinvitationmessageoption;👋;false]
$addOption[Error logging;Log errors to specific channel;errorloggingoption;📢;false]
$addOption[Embed color;Change the current embed color used in all cmds;embedcoloroption;🎨;false]
$addOption[Pre-release;Whether or not to mark the current build as Pre-release;prereleaseoption;⚠️;false]
$addOption[Startup;Send messages that the bot is ready to specific channel;startupoption;🚦;false]
$addOption[Expose build info;Whether or not to enable "Build Info" button in stats cmd;exposebuildinfooption;🛠️;false]
`
}
