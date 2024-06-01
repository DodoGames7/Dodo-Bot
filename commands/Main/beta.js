module.exports = [{
    name: "beta",
    info: {
        description: "Allows you to test experimental commands of Dodo-Bot (unless the server does not have them enabled).",
        perms: ["`SendMessages`"]
    },
    code: `$title[Beta Commands]
    $description[Feeling experimental? Feel free to choose on whether or not, you want to test new experimental commands!
    
**Current Settings**
**Beta commands**#COLON# \`$get[betastatus]\`

**NOTE**: Commands in this feature will only work if you and the server have Beta commands enabled due to security reasons.
]
    $color[$getVar[embedcolor]]
    $addButton[2;Commands;2;latestbetacmds_$authorID;false]
    $addButton[2;Toggle;2;betacmdsbuttontoggle_$authorID;false;🔄]
    $addSelectMenu[1;string;betacommandsselectmenu_$authorID;About beta commands.;1;1;false;What are they?:What is beta commands?:whatisbetacmds:false;Why do they exist?:See on why beta commands do exist!:betacmdsexistreason:false]
    $cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;beta;$authorID];$dateStamp];1000]]:R>]
$let[betastatus;$replaceText[$replaceText[$getGlobalUserVar[betacommands];on;Enabled];off;Disabled]]
    `
    }]
