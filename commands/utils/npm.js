module.exports = {
  name: "npm",
  code: `
  $title[1;$getObjectProperty[name];https://npmjs.org/package/$message]
  $addField[1;Official Email;$getObjectproperty[author_email];yes]
  $addField[1;Last Published;$getObjectProperty[last_published];yes]
  $addField[1;repository;$getObjectProperty[repository];yes]
  $addField[1;Maintainers;$getObjectProperty[maintainers]]
  $addField[1;version;$getObjectProperty[version];yes]
  $addField[1;description;$getObjectProperty[description];yes]
  $addField[1;author;$getObjectProperty[author];yes]
  $createObject[$jsonRequest[https://api.popcat.xyz/npm?q=$message]
  $suppressErrors[cannot find package with that name]
  $argsCheck[1;give me a package name to search]
  $onlyif[$checkcontains[$toLowercase[$message];nsfw-test-word]==false;{newEmbed:{title: NSFW DETECTED}{description: you can't search for nsfw npm packages, Dodo bot attempts to be clean to users without any 18+ content, not for your bad needs}}]
  $color[1;RANDOM]`
}