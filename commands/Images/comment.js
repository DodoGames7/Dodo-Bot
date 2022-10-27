module.exports = {
  name: "comment",
  code: `$attachment[https://some-random-api.ml/canvas/youtube-comment?avatar=$replaceText[$authoravatar;.webp;.png;-1]&username=$replaceText[$username; ;+;-1]&comment=$uri[$message;encode];comment.png]
  $onlyIf[$message!=;you can't make a youtube comment without saying anything]
  $onlyBotPerms[attachfiles;i need \`ATTACH_FILES\` Permissions before posting generated results]`
} // fakes a youtube comment for fun