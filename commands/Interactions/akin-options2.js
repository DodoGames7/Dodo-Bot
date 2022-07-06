module.exports  = [{
  name: "akin_ani",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:changed The Type of Akinator Game to \`animal\` $setServerVar[akin_gametype;animal]}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:secondary:akin-charac:yes:}{button:animal:success:akin_ani:yes:}{button:object:secondary:akin_object:yes:}};;no]`
}, {name: "akin_object",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{title:Game Mode Option}{description:changed The Type of Akinator Game to \`object\` $setServerVar[akin_gametype;object]}};{actionRow:{button:back:secondary:backakinoption:no:}{button:character:secondary:akin-charac:yes:}{button:animal:secondary:akin_ani:yes:}{button:object:success:akin_object:yes:}};;no]`
   },{
     name: "akinlanguage",
     type: "interaction",
     prototype: "button",
     code: `$interactionUpdate[;{newEmbed:{title: available Languages}{description:here you can see a list of languages you can choose by using select menu shown below}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]`
   },{
     name: "akinmenu",
     type: "interaction",
     $if: "v4",
     prototype: "selectMenu",
     code: `$if[$message==ar]
     $interactionUpdate[;{newEmbed:{title: available Languages}{description:changed akinator language to \`Arabic\` $setServerVar[akin_language;ar]}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]
         $endif
         $if[$message==en]
         $interactionUpdate[;{newEmbed:{title: available Languages}{description:changed akinator language to \`English\` $setServerVar[akin_language;en]}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]
         $endif
         $if[$message==fr]
         $interactionUpdate[;{newEmbed:{title: available Languages}{description:changed akinator language to \`Franch\` $setServerVar[akin_language;fr]}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]
         $endif
         $if[$message==de]
         $interactionUpdate[;{newEmbed:{title: available Languages}{description:changed akinator language to \`German\` $setServerVar[akin_language;de]}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]
         $endif
         $if[$message==it]
         $interactionUpdate[;{newEmbed:{title: available Languages}{description:changed akinator language to \`italian\` $setServerVar[akin_language;it]}};{actionRow:{button:back:secondary:backakinoption:no}{actionRow:{selectMenu:akinmenu:select any one::1::1:no:{selectMenuOptions:Arabic:ar:Arabic Language:no:}
         {selectMenuOptions:English:en:Main Language:no:}{selectMenuOptions:Franch:fr:Franch Language:no:}{selectMenuOptions:German:de:German Language:no:}{selectMenuOptions:italian:it:italian Language:no:}};;no]
         $endif
     `
   }]
