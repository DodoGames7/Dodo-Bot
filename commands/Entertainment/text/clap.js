module.exports = [{
  name: "clap",
  info: {
    description: "Makes 👏 the 👏 text 👏 look 👏 like 👏 this",
    perms: ["`SendMessages`"]
},
  code: `$ifAwaited[$checkContains[$noMentionMessage; ]==true;{execute:spaceclap};{execute:nonspaceclap}]
$onlyIf[$noMentionMessage!=;Please enter a text for it to get clapped.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;clap;$authorID];$dateStamp];1000]]:R>]`
},{
name: "spaceclap",
type: "awaited",
code: `
$replaceText[$noMentionMessage; ; 👏 ]
`
},
{
name: "nonspaceclap",
type: "awaited",
code: `
$replaceText[$noMentionMessage;; 👏 ]
`
}]
