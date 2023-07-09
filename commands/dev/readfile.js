module.exports = {
name: "readFile",
$if: "old",
code: `$if[$charCount[$readFile[$message]]>=2000]
    Results has exceeded 2000 characters. Creating the result as an file instead.
    $createFile[$readFile[$message];result.txt]
    $else
    \`\`\`js
    $readFile[$message]
    \`\`\`
    $endif
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    $onlyIf[$message!=undefined;Please insert a file name from the bot's files to read them.]`
    
}