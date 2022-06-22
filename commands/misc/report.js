module.exports = {
  name: "report",
  code: `$title[1;Bug Report & Feedbacks]
  $addField[1;Server;$serverName]
  $addField[1;Author;\`$userTag[$authorID]\`]
  $addField[1;reporter id;$authorID]
  $addField[1;reason for report;$message]
  $author[1;$userTag[$authorID];$authorAvatar]
  $addTimestamp[1]
  $color[1;BLUE]
  $sendMessage[sent the bug report to the developers;no]
  $argsCheck[>1;you need to provide something to bug report it, make sure it's valid otherwise, a blacklist will be resulted (feedback reports are fine)]
  $useChannel[$getChannelVar[reportlogs]]
  $onlyif[$checkContains[$getChannelVar[reportlogs];none]==false;there is no channel set, you can contact \`$userTag[$botOwnerID]\` to enable it]
  `
}