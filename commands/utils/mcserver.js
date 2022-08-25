module.exports = {
  name: "mcserver",
  code: `$title[1;$getObjectProperty[hostname]'s info]
  $addField[1;Server Version;$getObjectProperty[version]]
  $addField[1;Mode;$getObjectProperty[gamemode];yes]
  $addField[1;ID;$getObjectProperty[serverid];yes]
  $addField[1;Active Map;$getObjectProperty[map];yes]
  $addField[1;MOTD;$getObjectProperty[motd.clean[0]];yes]
  $addField[1;IP;$getObjectProperty[ip];yes]
  $addField[1;Port;$getObjectProperty[port];yes]
  $onlyIf[$getObjectProperty[hostname]!=undefined;couldn't find info about that mc server]
  $createObject[$jsonRequest[https://apiv2.spapi.ga/mc/bedrock?host=$uri[$message;encode]
  $onlyIf[$message!=;you need to provide information about minecraft server]`
}
