module.exports = [{
    name: "dev-panel",
    aliases: ["developer-panel", "dev-settings"],
    code: `$title[Developer panel]
    $description[In this command, you can do take certain actions on what should the bot do behind the scenes.

    At the moment, this only contains 2 options but more may be added later on.]
    $color[Red]
	$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png]
    $addSelectMenu[1;string;devmenu_$authorID;Select an option;1;1;false;Welcome new servers!:Whether or not the bot should greet new servers.:botwelcome:false:👋;Error Logging:Send errors to specific channel.:errorlog:false:📢]
  $cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;dev-panel;$authorID];$dateStamp];1000]]:R>]]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
    }]
