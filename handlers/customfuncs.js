module.exports=(bot)=>{
  bot.functionManager.createCustomFunction({
  name : '$dodoAvatar', //FUNCTION NAME 
params : [],//THE TYPE OF PARAMS
type : 'aoi.js', //TYPE METHOD
code : ` 
$attachment[$userAvatar[$botOwnerID];dodoGames.png]
` //THE ACTUAL CODE IT WILL BE RETURN
})
  
}