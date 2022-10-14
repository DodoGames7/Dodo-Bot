module.exports = {
    name: "item",
    $if: "v4",
    code: `$if[$message==suncard]
    $title[Sun Card ($getGlobalUserVar[suncard] Owned)]
    $description[once someone said that this item is unknown for some reason
    when using this item you won't be disturbed by people for 3 hours meaning that it's an shield item to protect you
    type: \`rare\`
    ]
    $thumbnail[https://cdn.discordapp.com/attachments/859104527772155936/1025823432006455408/ezgif.com-gif-maker.png]
    $else
    $if[$message==taco]
    $title[Taco ($getGlobalUserVar[taco] Owned)]
    $description[when you eat this you can become strong for 10 minutes
    type: \`common\`
    ]
    $else
    $if[$message==star]
    $title[Star ($getGlobalUserVar[star] Owned)]
    $description[it looks like somehow escaped from mario being trying to catch it to complete one of his levels, after all it's just an star maybe? 
    type: \`Collectable\`]
    $thumbnail[https://cdn.discordapp.com/emojis/1027640677447770192.gif?size=96&quality=lossless]
    $else
    there is no item named that, try again? maybe you entered the wrong item id
    $endif
    $endif
    $endif
    $onlyIf[$message!=;enter an item id] 
    `
    }