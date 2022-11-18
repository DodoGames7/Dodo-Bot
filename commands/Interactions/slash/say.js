module.exports = {
    name: "say",
    type: "interaction",
    prototype: "slash",
    $if: "v4",
    code: `$if[$slashOption[embed]==false]
$interactionReply[$slashOption[text]]
$disableMentionType[all]
$elseif[$slashOption[embed]==true]
$interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{title:Say Command}{description:$slashOption[text]}{color:BLURPLE}}]
$endelseif
$endif`
}
