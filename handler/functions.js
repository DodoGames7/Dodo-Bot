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
    name: "$8ballanswers",
    type: "aoi.js",
    params: [],
    code: `$randomText[Yes;No;Yes definitely;You may rely on it;Without a doubt;It is decidedly so;Ask again later;Better not tell you now;Cannot predict now;Concentrate and ask again;My reply is no;My sources say no;Outlook not so good;Very doubtful;Most likely;As I see it, yes;Signs point to yes;Reply hazy, try again;Don’t count on it]

`
  },{
    name: "$hasUserTag",
    type: "aoi.js",
    params: ["userID"],
    code: `
$checkCondition[$charCount[$discriminator[$get[userInput]]]!=1]

$let[userInput;{userID}]
    `
  },{
   name: "$userURL",
   type: "aoi.js",
   params: ["userID"],
   code: `https://discord.com/users/$get[userInput]

   $let[userInput;{userID}]
   `
  },{
    name: "$fallbackAttachment",
    type: "aoi.js",
    params: ["url", "fallbacktoUse"],
    code: `
$advancedReplaceText[$checkCondition[$IsValidImageLink[$get[Input]]==true];true;$get[Input];false;$get[FallbackInput]]
$let[FallbackInput;{fallbacktoUse}]
$let[Input;{url}]

    `
  }]
