module.exports = {
  name: "clear",
  aliases: ['purge','cleanmsgs'],
  code: `$deleteIn[1s]
  Successfully deleted $message[1] messages
  $wait[1s]
  $clear[$message[1]]
  $onlyIf[$message[1]<=100;I can't purge up to 100 messages]
  $onlyIf[$message[1]>=0;I can't 0 messages]
  $onlyIf[$isNumber[$message[1]]==true;Hey you need to specify how many messages you want me to purge with a valid number]
  $onlyIf[$argsCount==1;You need to provide a number between 1-100
  $onlyPerms[managemessages;You don't have \`MANAGE MESSAGES\` permission]
  $onlyBotPerms[managemessages;I don't have \`MANAGE MESSAGES\` permission]
$suppressErrors`
} // deletes a amount of certain messages
