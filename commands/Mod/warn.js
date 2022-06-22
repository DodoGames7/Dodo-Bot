module.exports = {
  name: "warn",
  code: `$setUserVar[warns;$mentioned[1];$sum[$getUserVar[warns];1]]
  $title[1;you have been warned by $username[$authorID]
  $addField[1;Reason;$noMentionMessage[1]]
  $addField[1;Server;$serverName[$guildID]]
  $dm[$mentioned[1]]
  $sendMessage[$username[$mentioned[1]] has been Warned! Reason: $noMentionMessage[1];no]
  $argsCheck[>1;i can't warn nothing]
$onlyForIDS[$botOwnerID;]`
}