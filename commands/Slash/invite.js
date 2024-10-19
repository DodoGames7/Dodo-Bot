module.exports = {
name: "invite",
type: "interaction",
prototype: "slash",
code: `$interactionReply[{newEmbed:{title:invite Dodo-Bot}{description:To invite the bot into a server, click on the "Invite" button below.}{color:$getVar[embedcolor]}}{actionRow:{button:Invite:5:$nonEscape[$getClientInvite[sendmessages;viewchannel;addreactions;attachfiles;viewauditlog]]:false}};all;true]

$onlyIf[$getVar[userapps]==true;User apps are currently disabled.
{ephemeral}
{interaction}
]
`
}
