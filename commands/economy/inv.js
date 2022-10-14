module.exports = {
    name: "inventory",
    aliases: 'inv',
    code: `$title[$username[$mentioned[1]]'s inventory]
    $description[🌮 **Taco**: $getGlobalUserVar[taco;$mentioned[1]]
    🎴 **suncard**: $getGlobalUserVar[suncard;$mentioned[1]]
    ❓ **HeckerCard**: $getGlobalUserVar[heckercard;$mentioned[1]]
    💀 **RickRoller**: $getGlobalUserVar[rickroller;$mentioned[1]]
    🌟 **sm64 Star Thingy**: $getGlobalUserVar[star;$mentioned[1]]
    ]
    `
    }