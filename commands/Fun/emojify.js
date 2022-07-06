module.exports = {
  name: "emojify",
  code: `$sendMessage[$getObjectProperty[emojified];no]
$createObject[$jsonRequest[https://resapi.up.railway.app/emojify?text=$toLowercase[$replaceText[$message; ;+;-1]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to emojify text]
$onlyIf[$message!=;you need to provide me something to emojify it]
  `
}
