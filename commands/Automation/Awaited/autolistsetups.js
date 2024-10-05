/*
This is mainly used for testing for now
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
