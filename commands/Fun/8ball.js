module.exports = {
  name: "8ball",
  code: `$title[1;8ball has Spoken!]
  $addField[1;Question;$message]
  $addField[1;Answer;$getObjectProperty[response]]
  $onlyIf[$getObjectProperty[response]!=undefined;something went wrong, try again or check later]
  $createObject[$jsonRequest[https://apiv1.spapi.ga/fun/8ball]
  $onlyIf[$message!=;you need to ask 8ball a question so he can answer]`
}
