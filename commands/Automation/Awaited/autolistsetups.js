/*
This is a unused file, which means you can delete it safely (until you uncomment custom function's handler setup in index.js and run it's dedicated func after that).
It will be used in the future at one point once 6.9.0 is out
*/

module.exports = [{
    name: "autoListIterator",
    type: "awaited",
    code: `$comment[Push the text based on the current array element.]
        $arrayPush[result;$if[$arrayAt[totalList;$sub[$get[i];1]]==;None;* $arrayAt[totalList;$sub[$get[i];1]]]]

        $comment[Let's increment the iteration index.]
        $let[i;$sum[$get[i];1]]`
},{
    name: "autoListIteratorForChannels",
    type: "awaited",
    code: `$comment[Push the text based on the current array element.]
        $arrayPush[result;$if[$arrayAt[totalList;$sub[$get[i];1]]==;None;$get[channels]]]

        $let[channels;$if[$guildChannelExists[$guildID;$arrayAt[totalList;$sub[$get[i];1]]]==true;* <#$arrayAt[totalList;$sub[$get[i];1]]>;\`Deleted Channel\`]]
        $comment[Let's increment the iteration index.]
        $let[i;$sum[$get[i];1]]`
},{
    name: "autoListIteratorForRoles",
    type: "awaited",
    code: `$comment[Push the text based on the current array element.]
        $arrayPush[result;$if[$arrayAt[totalList;$sub[$get[i];1]]==;None;$get[roles]]]

        $let[roles;$if[$roleExists[$arrayAt[totalList;$sub[$get[i];1]];$guildID]==true;* <@&$arrayAt[totalList;$sub[$get[i];1]]>;\`Deleted Role\`]]
        $comment[Let's increment the iteration index.]
        $let[i;$sum[$get[i];1]]`
}]
