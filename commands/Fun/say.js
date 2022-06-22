module.exports = {
  name: "say",
  code: `$if[$message==--embed]
  $title[1;say Command]
  $description[1;$message]
  $author[1;$username[$authorID];$authorAvatar]
  $else
  $message
  
  - from \`$userTag\`
  $endif
$onlyif[$checkContains[$message;@everyone;@here;<@;<@&]==false;you can't abuse me to raid thousands of servers with that o_o]
$onlyIf[$message!=;provide something for me to say]
  `
}