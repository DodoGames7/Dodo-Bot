module.exports = {
    name: "report",
    aliases: "bugreport",
    code: `$title[Help Dodo-Bot Future]
    $description[If you have found an bug, then you can report it by clicking the button below. Be sure that it's valid otherwise you may be banned from Reporting Bugs on Github.

Note: you may need to have an Github account to report.]
    $color[Blurple]
    $addButton[1;Report;5;https://github.com/DodoGames7/Dodo-Bot/issues/new/choose;false]
    $cooldown[2s; Slow down! Don't spam the command!
    Time left: \`%time%\`]
    `
}