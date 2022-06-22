module.exports = [{
  name: "useakinbuttons",
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:Use Buttons Option}{description:Whether to use Discord's Buttons or not in the game}};{actionRow:{button:Back:secondary:backakinoption:no:}{button:Enable:secondary:akinoptionbuttontrue:no:}{button:Disable:secondary:akinoptionbuttonfalse:no:}}
;;no}]
`
},{
   name: "akinoptionbuttonfalse",
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:Use Buttons Option}{description:successfully Disabled buttons in akinator game! $setServerVar[akin_buttons;false]}};{actionRow:{button:Back:secondary:backakinoption:no:}{button:Enable:secondary:akinoptionbuttontrue:yes:}{button:Disable:success:akinoptionbuttonfalse:yes:}}
;;no}

`
},{
   name: "akinoptionbuttontrue",
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:Use Buttons Option}{description:successfully enabled buttons in akinator game! $setServerVar[akin_buttons;true]}};{actionRow:{button:Back:secondary:backakinoption:no:}{button:Enable:success:akinoptionbuttontrue:yes:}{button:Disable:secondary:akinoptionbuttonfalse:yes:}}
;;no}

`},{
  name: "akingamemode",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:change game mode to other}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:secondary:akin-charac:no:}{button:animal:secondary:akin_ani:no:}{button:object:secondary:akin_object:no:}};;no]`
},{
  name: "akin-charac",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:changed The Type of Akinator Game to \`character\` $setServerVar[akin_gametype;character]}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:success:akin-charac:yes:}{button:animal:secondary:akin_ani:yes:}{button:object:secondary:akin_object:yes:}};;no]`
},{
  name: "backakinoption",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Akinator Options}{description:you can customize options of akinator game, use buttons below to select what do you want to change}};{actionRow:{button:Use Buttons:primary:useakinbuttons:no}{button:Game Mode:primary:akingamemode:no}{button:language (WIP):secondary:akinlanguage:yes}};;no]`
}]