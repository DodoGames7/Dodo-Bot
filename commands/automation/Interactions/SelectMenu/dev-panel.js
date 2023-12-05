module.exports = [{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionReply[;{newEmbed:{title:Welcome new servers!}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.

    **Currently is**#COLON# $get[botgreetconfig]

    }};{actionRow:{button:Toggle:1:botgreettoggle_$authorID:false}};;all;true]

    $let[botgreetconfig;$replaceText[$replaceText[$getVar[botgreeting];true;Enabled];false;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
    $onlyIf[$interactionData[values[0]]==botwelcome;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        $if: "old",
        type: "interaction",
        prototype: "button",
        code: `$if[$getVar[botgreeting]==true]
        $interactionReply[Dodo-Bot will no longer welcome new servers.;;;;all;true]
        $setVar[botgreeting;false]
        $elseif[$getVar[botgreeting]==false]
        $interactionReply[Dodo-Bot from now on, will be welcoming new servers.;;;;all;true]
        $setVar[botgreeting;true]
        $endelseif
        $endif

        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botgreettoggle;]
        `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionReply[;{newEmbed:{title:Maintenance mode}{description:
            Temporary disable all features/commands from running.

            This is useful in cases where an serious exploit was discovered in the bot that could be potentially abused by everyone. Only enable this in emergency cases.

            **Currently is**#COLON# $get[maintenancemodeconfig]

            }};{actionRow:{button:Toggle:1:maintenancetoggle_$authorID:false}};;all;true]

            $let[maintenancemodeconfig;$replaceText[$replaceText[$getVar[isinmaintenance];true;Enabled];false;Disabled]]
            $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
                {extraOptions:{interaction:true}}]
            $onlyIf[$interactionData[values[0]]==maintenancemode;]
                $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        $if: "old",
        type: "interaction",
        prototype: "button",
        code: `$if[$getVar[isinmaintenance]==true]
        $interactionReply[Disabled Maintenance mode. Enable it again to disable functionality of Dodo-Bot.;;;;all;true]
        $setVar[isinmaintenance;false]
        $elseif[$getVar[isinmaintenance]==false]
        $interactionReply[Enabled Maintenance mode. Disable it again to enable functionality of Dodo-Bot.;;;;all;true]
        $setVar[isinmaintenance;true]
        $endelseif
        $endif

        $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==maintenancetoggle;]
        `
    }]
