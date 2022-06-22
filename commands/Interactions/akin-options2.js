module.exports  = [{
  name: "akin_ani",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:changed The Type of Akinator Game to \`animal\` $setServerVar[akin_gametype;animal]}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:secondary:akin-charac:yes:}{button:animal:success:akin_ani:yes:}{button:object:secondary:akin_object:yes:}};;no]`
}, {name: "akin_object",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:changed The Type of Akinator Game to \`object\` $setServerVar[akin_gametype;object]}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:secondary:akin-charac:yes:}{button:animal:secondary:akin_ani:yes:}{button:object:success:akin_object:yes:}};;no]`
   }]