module.exports = {
  name: "execute",
  info: {
    dev: "true"
  },
  $if: "old",
  aliases: "exec",
  code: `$if[$charCount[$exec[$message]]>=2000]
$createFile[$exec[$message];result.txt]
$else
  \`\`\`$exec[$message]\`\`\`
$endif
  $onlyIf[$message!=;Send me an terminal command to be executed.]
  $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]

  `
}