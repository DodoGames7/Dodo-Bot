module.exports = {
  name: "youtube",
  aliases: ["yt", "youtubeinfo"],
  code: `$title[1;$getObjectProperty[title];$getObjectProperty[url]]
  $addField[1;Channel;$getObjectProperty[owner.name]]
  $addField[1;Views (temp);$getObjectProperty[views.short]]
  $addField[1;Published at;$getObjectProperty[publishedtime];yes]
  $addField[1;ID;$getObjectProperty[id];yes]
  $thumbnail[1;$getObjectProperty[thumbnails.url.1]]
  $createObject[$jsonRequest[https://apiv2.spapi.ga/fun/ytvinfo?search=$message;;could not find that video name]`
}