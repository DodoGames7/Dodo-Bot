module.exports = {
  name: "youtube",
  aliases: ["yt", "youtubeinfo"],
  code: `$title[1;$getObjectProperty[title];$getObjectProperty[url]]
  $addField[1;Channel;$getObjectProperty[owner.name]]
  $addField[1;Views (temp);$getObjectProperty[views.short]]
  $addField[1;Published at;$getObjectProperty[publishedtime];yes]
  $addField[1;ID;$getObjectProperty[id];yes]
  $thumbnail[1;$getObjectProperty[thumbnails[0].url]]
  $onlyIf[$getObjectProperty[title]!=undefined;could not find what you're looking for]
  $createObject[$jsonRequest[https://apiv2.spapi.ga/fun/ytvinfo?search=$uri[$message;encode]
  $onlyIf[$message!=;provide something to search for yt video]`
}
