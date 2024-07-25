module.exports = [{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==rock_$authorID;]

$interactionUpdate[$title[Results..]
$description[You choose Rock 🌑! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==paper_$authorID;]

$interactionUpdate[$title[Results..]
$description[You choose Paper 📰! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
},{
type: "interactionCreate",
allowedInteractionTypes: ["button"],
code: `
$onlyIf[$customID==scissors_$authorID;]

$interactionUpdate[$title[Results..]
$description[You choose Scissors ✂️! I choose $randomText[Rock 🌑;Paper 📰;Scissors ✂️]]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addButton[rock_$authorID;Rock;Secondary;🌑;true]
$addButton[paper_$authorID;Paper;Secondary;📰;true]
$addButton[scissors_$authorID;Scissors;Secondary;✂️;true]
]`
}]