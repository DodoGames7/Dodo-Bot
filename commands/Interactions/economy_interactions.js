module.exports = {
name: "daily",
type: "interaction",
prototype: "button",
code: `$interactionReply[you will be reminded after one day of daily!;;;;everyone;yes]
$setTimeout[remind;1d;user: $interactionData[author.id]] 
`
}