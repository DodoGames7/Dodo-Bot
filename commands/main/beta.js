module.exports = [{
    name: "beta",
    code: `$title[Beta Commands]
    $description[Beta commands are Work in progress commands for beta testers to try and find bugs in them. While most of them are either unfinished or are heavily tested with lot of fixes and such, it's not guaranteed that they will continue to work.
    
    Commands in beta state may be either removed or released to the public depending on the choice of the bot owner by it. Be aware!
    
    You can opt in by Clicking on the button "Join as beta tester"! You can opt out of beta commands at anytime you want by clicking on the button "Opt out of beta cmds".
    
    $get[betastatus]

**NOTE**: the server must have beta access enabled so that the beta commands can be used after joining as a beta tester otherwise it won't respond.
]
    $color[Blurple]
    $addButton[1;Opt out of beta cmds;4;optout_$authorID;false]
    $addButton[1;Join as beta tester;1;betatest_$authorID;false]
    $cooldown[2s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    $let[betastatus;$replaceText[$replaceText[$getGlobalUserVar[betacommands];true;*You're currently a beta tester*];false;*You're not a beta tester currently*]]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[You're now a beta tester to access beta commands! Run help command to view beta commands from select menu now.;;;;all;true]
    
    $setGlobalUserVar[betacommands;true]
    
    $onlyIf[$getGlobalUserVar[betacommands]==false;
    You're already a beta tester!
    {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==betatest;]
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionReply[You're no longer a beta tester now! As a result, you won't be able to use beta commands now.;;;;all;true]
    
    $setGlobalUserVar[betacommands;false]
    
    $onlyIf[$getGlobalUserVar[betacommands]==true;
   You're not a beta tester to opt out of beta commands!
    {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}
    ]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==optout;]
    `
    }]