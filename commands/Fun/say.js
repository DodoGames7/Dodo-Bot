module.exports = {
  name: "say",
  code: `
  $message
  
  - from \`$userTag\`
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&]==false;you can't abuse me to raid thousands of servers with that o_o]
$onlyIf[$message!=;provide something for me to say]
  `
}
