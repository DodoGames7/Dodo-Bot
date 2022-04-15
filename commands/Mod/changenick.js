module.exports ={
  name:"changenick",
  aliases:["setnick","usernick","nickname"],
  code: `$changeNickname[$mentioned[1];$noMentionMessage]
Successfully Changed $username[$mentioned[1]]'s nickname to $noMentionMessage 
$onlyPerms[managenicknames;you Don't have Manage Nicknames Permission to use this, (sorry, not sorry)]
$onlyBotPerms[managenicknames;i literally Don't have Manage Nicknames Permission, how would i perform such a action?]
$argsCheck[>1;at least mention someone and then give me a text?]
`
  
}
