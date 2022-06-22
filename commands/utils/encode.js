module.exports = {
  name: "encode",
  code: `$sendMessage[$getObjectProperty[binary];no]
$createObject[$jsonRequest[https://api.popcat.xyz/encode?text=$toLowercase[$replaceText[$message; ;+;-1]]]
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&;<@!]==false;you cannot use mentions to encode text]
$argsCheck[1;you need to provide me something to encode it]
  `
}