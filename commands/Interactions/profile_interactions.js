module.exports = [{
    name: "bio",
    type: "interaction",
    prototype: "button",
    code: `$interactionModal[New Bio Title;bioset;{actionRow:{textInput:Describe about yourself?:2:bioInput:yes:$username:0:2000:hi im $username!}]
    `
    },
    {
        name: "bioset",
        type: "interaction",
        prototype: "modal",
        code: `$setGlobalUserVar[profilebio;$textInputValue[bioInput];$authorID]
    $interactionReply[your bio has been changed run \`profile\` command to check out;;;;everyone;yes]
    $onlyIf[$replaceText[$textInputValue[bioInput]; ;]!=;{
    "content" : "you can't make an invisible bio, so why try?",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]
    
    `
                          
      },{
          name: "color",
          type: "interaction",
          prototype: "button",
          code: `$interactionModal[New Color;colorset;{actionRow:{textInput:enter the hexcode of the color:1:code:yes:#5865f2:0:7:}}]
    
    `},{
        name: "colorset",
        type: "interaction",
        prototype: "modal",
        code: `$setGlobalUserVar[profilecolor;$textInputValue[code];$authorID]
    $interactionReply[the color has been changed to the one you choose run \`profile\` command to check out;;;;everyone;yes]
    
    $onlyIf[$isValidHex[$textInputValue[code]]==true;{
    "content" : "invalid hex code!",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]`
    },{
        name: "title",
        type: "interaction",
        prototype: "button",
        code: `$interactionModal[New Rank Title;titleresult;{actionRow:{textInput:new title name:2:rankInput:yes:e.g Chad:0:100}]`
    },{
        name: "titleresult",
        type: "interaction",
        prototype: "modal",
        code: `$setGlobalUserVar[rank;$textInputValue[rankInput];$authorID]
    $interactionReply[your rank (aka custom title) has been changed run \`profile\` command to check out;;;;everyone;yes]
    $onlyIf[$replaceText[$textInputValue[rankInput]; ;]!=;{
    "content" : "you can't make an invisible custom title, so why try?",
    "ephemeral" : true,
    "options" : { "interaction" : true }
    }]`
    }]
