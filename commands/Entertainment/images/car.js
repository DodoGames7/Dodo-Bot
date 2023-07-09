module.exports = {
name: "car",
code: `
$image[$getObjectProperty[image]]
$onlyIf[$getObjectProperty[image]!=undefined;Something went wrong while searching for an image, please try again.]
$createObject[$jsonRequest[https://api.popcat.xyz/car]]
$suppressErrors[{newEmbed:{title:Uh.. Oh!}{description:Something went wrong while running the command. If you still get this message then you may try again later if possible.

If waiting didn't help and you still get this message then it's most likely that the stuff we use for car command are down for now.}{color:Red}}]
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
                           `
}