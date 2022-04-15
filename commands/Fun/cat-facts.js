module.exports = {
name: "cat-facts",
code: `$sendMessage[$getObjectProperty[fact];no]
$createObject[$jsonRequest[https://some-random-api.ml/facts/cat]`
} // returns random facts about cats