module.exports = [{
    name: "dev-settings",
    aliases: ["dev-panel", "developer-panel"],
    code: `$title[Developer panel]
    $description[This is like the \`settings\` command but for bot-owners only. It contains options that controls on how the bot behaves globally in servers it is in.
    
    At the moment, this only contains three options but more may be added later on.]
    $color[Red]
    $addSelectMenu[1;string;devmenu_$authorID;Select an option;1;1;false;Welcome new servers!:Whether or not the bot should greet new servers.:botwelcome:false:👋;Maintenance mode:Temporary disable features/commands from functioning.:maintenancemode:false:⚠️;Schedule shutdown:Schedule a shutdown for the bot.:scheduleshutdownsetting:false:🛑]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
    }]
