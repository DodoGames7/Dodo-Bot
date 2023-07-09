module.exports = {
name: "$alwaysExecute",
code: `Hello there! My Prefix on this server is \`$getGuildVar[prefix]\`.
$onlyIf[$stringStartsWith[$message;<@$clientID>]==true;]
$onlyIf[$getGuildVar[autopingreply]==true;]
`
}