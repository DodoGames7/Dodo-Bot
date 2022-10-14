module.exports = {
    name: "profile",
    code: `$title[$username[$mentioned[1;yes]]'s Profile]
    $description[
    Rank (title): $getGlobalUserVar[rank;$mentioned[1;yes]]
    bio: $getGlobalUserVar[profilebio;$mentioned[1;yes]]
    Net: $multi[$getGlobalUserVar[money];$getGlobalUserVar[bank]]
    ]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $color[$getGlobalUserVar[profilecolor;$mentioned[1;yes]]]
    $onlyIf[$isBot[$mentioned[1;yes]]!=true;bots can't have a profile]
    
    
    
    `
    }