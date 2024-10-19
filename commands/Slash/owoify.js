module.exports = {
name: "owoify",
type: "interaction",
prototype: "slash",
code: `$interactionReply[$owoify[$slashOption[text]];users;true]
$disableMentionType[all]

$onlyIf[$getVar[userapps]==true;User apps are currently unavailable.
{ephemeral}
{interaction}
]
`
}
