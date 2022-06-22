module.exports = {
  name: "github",
  code: `
  $title[1;$getObjectProperty[name]]
  $addField[1;Public Repositories;$getObjectProperty[public_repos];yes]
  $addField[1;Followers;$getObjectProperty[followers];yes]
  $addField[1;Following;$getObjectProperty[following];yes]
  $addField[1;Created At;$getObjectProperty[created_at];yes]
  $addField[1;company;$getobjectProperty[company];yes]
  $addField[1;Email;$getobjectProperty[email];yes]
  $addField[1;Bio;$getobjectProperty[bio];yes]
  $addField[1;location;$getobjectproperty[location];yes]
  $thumbnail[1;$getobjectProperty[avatar]]
  $onlyIf[$getObjectProperty[name]!=undefined;something went wrong, maybe a api error or the user doesn't exist]
  $createObject[$jsonRequest[https://api.popcat.xyz/github/$noMentionMessage]
  $onlyIf[$noMentionMessage!=;give me a github username to search]
  `
}
