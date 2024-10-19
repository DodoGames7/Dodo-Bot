module.exports = {
name: "randomcolor",
type: "interaction",
prototype: "slash",
code: `$interactionReply[{newEmbed:{title:Random Color}{field:**Hex Code**:$randomColor}{color:$randomColor}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
