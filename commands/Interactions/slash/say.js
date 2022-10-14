module.exports = {
    name: "say",
    type: "interaction",
    prototype: "slash",
    $if: "v4",
    code: `$if[$slashOption[embed]==false]
$interactionReply[$slashOption[text]]
$else
$if[$slashOption[embed]==true]
$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{title:Say Command}{description:$slashOption[text]}{color:BLURPLE}}]
$endif
$endif`
}