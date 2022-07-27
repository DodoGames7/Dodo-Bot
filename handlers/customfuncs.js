module.exports=(bot)=>{
  bot.functionManager.createCustomFunction({
  name : '$dodoAvatar', //FUNCTION NAME 
params : [],//THE TYPE OF PARAMS
type : 'aoi.js', //TYPE METHOD
code : ` 
$attachment[$userAvatar[632607624742961153];dodoGames.png]
` //THE ACTUAL CODE IT WILL BE RETURN
}) 
  bot.functionManager.createCustomFunction({
    name : '$os',
    type : 'djs',
    code : async d => {
      const data = d.util.aoiFunc(d);
      const os = require(`os`)
      data.result = os.platform();
      
    return {
        code: d.util.setCode(data)
    }}

   }) 
  // returns the current operating system the host uses
 
}
