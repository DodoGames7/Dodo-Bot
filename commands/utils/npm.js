module.exports = {
  name: "npm",
  code: `
  $title[1;$getObjectProperty[package.name];https://npmjs.org/package/$noMentionMessage]
  $addField[1;Official Email;$getObjectproperty[package.maintainers.email];yes]
  $addField[1;Last Published;$getObjectProperty[package.date];yes]
  $addField[1;repository;$getObjectProperty[package.links.repository];yes]
  $addField[1;Maintainers;$getObjectProperty[package.maintainers.username]]
  $addField[1;version;$getObjectProperty[package.version];yes]
  $addField[1;description;$getObjectProperty[package.description];yes]
  $addField[1;author;$getObjectProperty[package.author.name];yes]
  $onlyIf[$getObjectProperty[package.name]!=undefined;cannot find that package name]
  $createObject[$jsonRequest[https://apiv1.spapi.ga/fun/npm?pkg=$noMentionMessage]
  $onlyIf[$noMentionMessage!=;give me a package name to search]
  $onlyif[$checkcontains[$toLowercase[$noMentionMessage];nsfw-test-word]==false;{newEmbed:{title: NSFW DETECTED}{description: you can't search for nsfw npm packages, Dodo bot attempts to be clean to users without any 18+ content, not for your bad needs}}]
  $color[1;RANDOM]`
}
