module.exports = {
name: "dog-facts",
code: `$sendMessage[$getObjectProperty[fact];no]
$createObject[$jsonRequest[https://some-random-api.ml/facts/dog]`
} // returns random facts about dogs