module.exports = [{
    name: "quotes",
    params: [],
    code: `
$let[quotes;$randomText[*It was always created what it was for. And that is just entertainment personally.*;*Don't let haters stop you. Keep working on your projects with your goals.*;*Destroying is easy. Creating is difficult.*;*Why should i care if my bot is unpopular? I just love my work.*]]
    $return[$get[quotes]]
    `
  },{
    name: "randomtopic",
    params: [],
    code: `
$let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]]

    $return[$get[topics]]
    `
  },{
    name: "commandperms",
    params: ["name"],
    code: `$jsonLoad[perms;$commandInfo[messageCreate;$env[name];info;perms]]
$let[check;$replace[$replace[$checkCondition[$arrayJoin[perms;, ]==];true;$commandInfo[messageCreate;$env[name];info;perms]];false;$arrayJoin[perms;, ]]]
    $return[$get[check]]
    `
  },{
    name: "commandaliases",
    params: ["name"],
    code: `$jsonLoad[aliases;$commandInfo[messageCreate;$env[name];aliases]]
$let[check;$replace[$replace[$checkCondition[$arrayJoin[aliases;, ]==];true;$commandInfo[messageCreate;$env[name];aliases]];false;$arrayJoin[aliases;, ]]]
    $return[$get[check]]
    `
  },{
    name: "sayembedmodefilter",
    params: ["content"],
    code: `
$let[message;$replace[$replace[$env[content];--embed;];—embed;]]

    $return[$get[message]]
    `
  },{
    name: "hasusertag",
    params: ["query"],
    code: `
$let[user;$findUser[$env[query];true]]
$let[result;$checkCondition[$charCount[$discriminator[$get[user]]]!=1]]

    $return[$get[result]]
    `
  },{
    name: "hasnickname",
    params: ["guildID", "query"],
    code: `
$let[user;$findUser[$env[query];true]]
$let[result;$checkCondition[$nickname[$env[guildID];$get[user]]!=$userDisplayName[$get[user]]]]

    $return[$get[result]]
    `
  },{
    name: "levelingpagefilter",
    params: ["content"],
    code: `
$let[message;$replace[$replace[$replace[$env[content];+;];-;];/;]]

    $return[$get[message]]
    `
  }]
