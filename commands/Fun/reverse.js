module.exports = {
  name: "reverse",
  code: `$sendMessage[$getObjectProperty[text];no]
$createObject[$jsonRequest[https://api.popcat.xyz/reverse?text=$uri[$message;encode]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to reverse text]
$onlyIf[$message!=;you need to provide me something to reverse it]
  `
}
