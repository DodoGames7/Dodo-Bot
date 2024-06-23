module.exports =[{
    name: "$alwaysExecute",
    code: `
    $nonEscape[$get[content]]
    $let[content;$advancedReplaceText[$nonEscape[$getGuildVar[levelmessage]];<level>;$getUserVar[level];<mention>;<@$authorID>;<username>;$username]]
$useChannel[$getGuildVar[levelingmessagechannel]]
$onlyIf[$hasPermsInChannel[$getGuildVar[levelingmessagechannel];$clientID;viewchannel;sendmessages]==true;]
    $onlyIf[$guildChannelExists[$guildID;$getGuildVar[levelingmessagechannel]]==true;]
    $onlyIf[$getGuildVar[levelingmessagechannel]!=none;]
    $onlyIf[$getGuildVar[levelmessagefeature]==on;]
    $setUserVar[xpLimit;$sum[$getUserVar[xpLimit;$authorID;$guildID];20];$authorID;$guildID]
    $setUserVar[level;$sum[$getUserVar[level;$authorID;$guildID];1];$authorID;$guildID]
    $onlyIf[$isBot==false;]
    $onlyIf[$getUserVar[xp]==$getUserVar[xpLimit];]
    $onlyIf[$getGuildVar[levelsystem]==on;]
    $disableMentionType[roles]
$disableMentionType[everyone]`
},{
    name: "$alwaysExecute",
    code: `
    $setUserVar[xp;$sum[$getUserVar[xp];1];$authorID;$guildID]
    $setGuildVar[islevelingreset;no]
$cooldown[2s;]
    $onlyIf[$isBot==false;]
    $onlyIf[$getGuildVar[levelsystem]==on;]`
}]