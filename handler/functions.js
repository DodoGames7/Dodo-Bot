module.exports = [{
    name: "$test",
    type: "aoi.js",
    params: [],
    code: `$randomText[This is text1;This is text2]`
},{
    name: "$dodoAvatar",
    type: "aoi.js",
    params: [],
    code: `$userAvatar[632607624742961153]`
},{
    name: "$randomTopic",
    type: "aoi.js",
    params: [],
    code: `$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What game have you spent the most hours playing?;What movie can you watch over and over without ever getting tired of?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?]`
},{
    name: "$hasUserTag",
    type: "aoi.js",
    params: ["userID"],
    code: `
$checkCondition[$charCount[$discriminator[$get[userInput]]]!=1]

$let[userInput;{userID}]

    `
  }]
