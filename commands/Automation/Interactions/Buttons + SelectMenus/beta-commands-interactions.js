module.exports = [{
        type: "interaction",
        prototype: "button",
        code: `
		$interactionFollowUp[$get[resultmessage];true]
    
	$interactionUpdate[{newEmbed:{title:Beta Commands}{description:
 Feeling experimental? Feel free to choose on whether or not, you want to test new experimental commands!
    
**Current Setting(s)**
**Beta commands**#COLON# \`$get[betastatus]\`

**NOTE**: Commands in this feature will only work if you and the server have Beta commands enabled due to security reasons.
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:betacommandsselectmenu_$authorID:About beta commands.:1:1:false:{stringInput:What are they?:whatisbetacmds:What is beta commands?:false}{stringInput:Why do they exist?:betacmdsexistreason:See on why beta commands do exist!}}}{actionRow:{button:Toggle:2:betacmdsbuttontoggle_$authorID:false:🔄}{button:Commands:2:latestbetacmds_$authorID:false}}]

$let[betastatus;$advancedReplaceText[$getGlobalUserVar[betacommands];on;Enabled;off;Disabled]]

$let[resultmessage;$advancedReplaceText[$checkCondition[$getGlobalUserVar[betacommands]==on];true;You're now a beta tester to access beta commands! Click the button "Commands" to try out the latest commands in this feature!;false;You're no longer a beta tester now! As a result, you won't be able to use beta commands now!]]

    $setGlobalUserVar[betacommands;$get[newtoggledsetting]]
$let[newtoggledsetting;$advancedReplaceText[$checkCondition[$getGlobalUserVar[betacommands]==on];true;off;false;on]]

  
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
        {interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==betacmdsbuttontoggle;]
	
    `
    },{
        type: "interaction",
        prototype: "button",
        code: `$interactionUpdate[{newEmbed:{title:Commands}{description:The following commands are currently available in this feature#COLON#

\`lulcat\`
}}{actionRow:{button:Home:2:betacmdshome_$authorID:false:🏠}}]



 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
 {interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==latestbetacmds;]
`
    },{
        type: "interaction",
        prototype: "button",
        code: `


$interactionUpdate[{newEmbed:{title:Beta Commands}{description:
 Feeling experimental? Feel free to choose on whether or not, you want to test new experimental commands!
    
**Current Setting(s)**
**Beta commands**#COLON# \`$get[betastatus]\`

**NOTE**: Commands in this feature will only work if you and the server have Beta commands enabled due to security reasons.
}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:betacommandsselectmenu_$authorID:About beta commands.:1:1:false:{stringInput:What are they?:whatisbetacmds:What is beta commands?:false}{stringInput:Why do they exist?:betacmdsexistreason:See on why beta commands do exist!}}}{actionRow:{button:Toggle:2:betacmdsbuttontoggle_$authorID:false:🔄}{button:Commands:2:latestbetacmds_$authorID:false}}]

$let[betastatus;$advancedReplaceText[$getGlobalUserVar[betacommands];on;Enabled;off;Disabled]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
{interaction}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==betacmdshome;]

`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `


$interactionUpdate[{newEmbed:{title:What is Beta commands?}{description:
 Beta commands are experimental commands that are unstable and are subject to have bugs in it. While at times, they may look like finished commands by the looks of it, however, they do have bugs if you dig deeper into them. 

Please, be aware that, commands in this feature may either be removed or taken out of the beta depending on the choice of the developer once it's stabilized enough. It is not recommended to use them always as they're meant for testing and as such, it requires caution when using them.

}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:betacommandsselectmenu_$authorID:About beta commands.:1:1:false:{stringInput:What are they?:whatisbetacmds:What is beta commands?:false}{stringInput:Why do they exist?:betacmdsexistreason:See on why beta commands do exist!}}}{actionRow:{button:Toggle:2:betacmdsbuttontoggle_$authorID:false:🔄}{button:Commands:2:latestbetacmds_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
{interaction}]
       $onlyIf[$getSelectMenuValues[all]==whatisbetacmds;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==betacommandsselectmenu;]

`
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `


$interactionUpdate[{newEmbed:{title:Why do they exist?}{description:
 Previously, in old versions of Dodo-Bot, the experimental commands were considered as part of finished commands for the help command categories. This led to a lot of wrong assumptions that the bot was buggy despite it had some stable commands. 

As a result, Beta commands feature was introduced around beta 4 of v2 as a way to separate between experimental and finished commands to ensure that everything is in control.

Despite the name, the feature is available for anyone to join as part of it and use the commands included with it. This is so to allow the public to test and report the bugs found in the experimental commands through the [Github repo's issues page](https#COLON#//github.com/dodoGames7/Dodo-Bot/issues).

}{color:$getVar[embedcolor]}}{actionRow:{selectMenu:betacommandsselectmenu_$authorID:About beta commands.:1:1:false:{stringInput:What are they?:whatisbetacmds:What is beta commands?:false}{stringInput:Why do they exist?:betacmdsexistreason:See on why beta commands do exist!}}}{actionRow:{button:Toggle:2:betacmdsbuttontoggle_$authorID:false:🔄}{button:Commands:2:latestbetacmds_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}} {ephemeral}
{interaction}]
       $onlyIf[$getSelectMenuValues[all]==betacmdsexistreason;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==betacommandsselectmenu;]

`
    }]
