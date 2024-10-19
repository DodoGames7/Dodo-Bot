module.exports = {
name: "reverse",
type: "interaction",
prototype: "slash",
code: `$interactionReply[$nonEscape[$reverse[$slashOption[text]]];users;true]
$disableMentionType[all]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
