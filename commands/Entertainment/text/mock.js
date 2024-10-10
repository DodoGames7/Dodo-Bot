module.exports = {
    name: "mock",
    info: {
        description: "Adds mockery style to your text.",
        perms: ["`SendMessages`"]
    },
    code: `$getObjectProperty[api;text]
$createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;Unable to generate the output. Please, try again later.]
$let[jsonresponse;$jsonRequest[https://api.popcat.xyz/mock?text=$uri[$message;encode];;Error]]
$onlyIf[$message!=;Please enter a text.]
$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;mock;$authorID];$dateStamp];1000]]:R>]
$disableMentionType[all]`
    }
