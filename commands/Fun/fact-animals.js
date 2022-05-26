module.exports = {
  name: "fact-animals",
  code: `$sendMessage[$getObjectProperty[fact];no]
  $createObject[$jsonRequest[https://some-random-api.ml/facts/$randomText[dog;cat;parrot;fox;panda;koala]`
}