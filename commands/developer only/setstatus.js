module.exports ={
  name:"setstatus",
  code: `$setstatus[$splitText[1];$splitText[2];$splitText[3]] Successfully Changed bot status <3
  
  $Textsplit[$message;,]
  $onlyForIDs[$botOwnerID;you cannot use this command]`
  } // allows changing bot status
