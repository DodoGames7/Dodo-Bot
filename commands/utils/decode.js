module.exports = {
  name: "decode",
  code: `$sendMessage[$getObjectProperty[text];no]
$createObject[$jsonRequest[https://api.popcat.xyz/decode?binary=$toLowercase[$replaceText[$message; ;+;-1]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to decode text]
$argsCheck[1;you need to provide me something to decode it]
  `
}