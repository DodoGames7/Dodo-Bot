module.exports = {
  name: "say",
  $if: "v4",
  code: `$if[$message[1]==embedded]
  $author[$userTag;$authorAvatar]
  $title[**Say Command**]
  $description[$messageSlice[1]]
  $color[BLURPLE]
  $onlyIf[$messageSlice[1]!=;provide something for me to say]
  $else
  $message[1]
  
  - from \`$userTag\`
$onlyif[$checkContains[$message[1];@everyone;@here;<@;<@&]==false;you can't abuse me to raid thousands of servers with that o_o]
$onlyIf[$message[1]!=;provide something for me to say]
$endif
  `
}
