module.exports = {
    name: "report",
    aliases: "bugreport",
    code: `$title[Help Dodo-Bot Future]
    $description[If you have found an bug, then you can report it by clicking the button below. Be sure that it's valid otherwise you may be banned from using this Command.]
    $color[Blurple]
    $addButton[1;Report;1;reportbutton;false]
    $onlyIf[$getVar[reportchannel]!=none;The Owner of the Bot has not set an channel for bug Reports.]
    $onlyIf[$getVar[canreport]==true;You're Banned from Reporting Bugs.]
    `
}