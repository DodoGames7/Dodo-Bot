module.exports = {
    name: "setreport",
    code: `$title[Setup an Report channel!]
    $description[You can find out on what is broken in the bot by having your users report bugs that they discover in your bot. To get started, click on the button "Set channel".

    Addtionally, you can also ban someone from using report command if they abuse it or unban them by using the button "Who can Report?".
       
    Warning: It's recommended to set the report channel in a private server where only you or your bot team can view reports.]
    $addButton[1;Who can Report?;1;reportmanage;false]
    $addButton[1;Set Channel;1;setchannel;false]
    $onlyForIDS[$botOwnerid;]`
}