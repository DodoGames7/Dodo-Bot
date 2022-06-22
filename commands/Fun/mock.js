module.exports = {
  name: "mock",
  code: `$sendMessage[$getObjectProperty[text];no]
$createObject[$jsonRequest[https://api.popcat.xyz/mock?text=$toLowercase[$replaceText[$message; ;+;-1]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to mockify text]
$onlyIf[$message!=;you need to provide me something to mockify it]
  `
}