module.exports = {
    name: "dice",
    code: `

    $editMessage[$get[messageid];{newEmbed:{title:There you go!!}{description:You got a $random[1;6] out of 6!}{color:Red}}{actionRow:{button:Try Again:2:dicetryagain_$authorID:false:🎲}}]
    $wait[3s]
    $let[messageid;$sendMessage[{newEmbed:{title:Rolling...}{color:Red}};true]]
	$cooldown[5s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[5s;user;dice;$authorID];$dateStamp];1000]]:R>]`
}
