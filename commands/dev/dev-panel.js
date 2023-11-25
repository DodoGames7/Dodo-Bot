module.exports = [{
    name: "dev-settings",
    aliases: ["dev-panel", "developer-panel"],
    code: `$title[Developer panel]
    $description[This is like the \`settings\` command but for bot-owners only. It contains options that controls on how the bot behaves globally in servers it is in.

    At the moment, this only contains one option but more may be added later on.]
    $color[Red]
    $addSelectMenu[1;devmenu_$authorID;Select an option;1;1;false;Welcome new servers!:Whether or not the bot should greet new servers.:botwelcome:false:👋]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
    },{
        type: "interaction",
        prototype: "selectMenu",
        code: `$interactionReply[;{newEmbed:{title:Welcome new servers!}{description:
    When Dodo-Bot gets added to a new server, it will greet members there with it's features including telling them it's default prefix. When this is disabled, the bot won't say anything when it gets added to new servers.

    By default, this is enabled to let people know the prefix easily instead of just guessing randomly to figure out.

    **Currently is**#COLON# $get[botgreetconfig]

    }};{actionRow:{button:Toggle:1:botgreettoggle:false}};;all;true]

    $let[botgreetconfig;$replaceText[$replaceText[$getVar[botgreeting];true;Enabled];false;Disabled]]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
        {extraOptions:{interaction:true}}]
    $onlyIf[$interactionData[values[0]]==botwelcome;]
        $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==devmenu;]`
    },{
        name: "botgreettoggle",
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
        `
    }]
