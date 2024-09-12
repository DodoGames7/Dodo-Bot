/*
This is a unused file, which means you can delete it safely (until you uncomment it's handler setup in index.js).
It will be certainly used in the future (no ETA).
You can do some modifications to enable it if you want.
HOWEVER, the functions will be broken because of aoi versions prior to 6.8.10 not having them fixed sadly.
*/

module.exports = [{
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
  },{
    name: "$autoList",
    type: "aoi.js",
    params: ["variable", "separator", "type"],
    code: `
        $comment[Let's return the result.]
        $arrayJoin[result;\n]

        $comment[Loop to map between each array element.]
        $loop[10;{};{type}]

        $comment[Number that controls the current iteration element.]
        $let[i;0]

        $comment[Creating the array that holds the result.]
        $createArray[result;]

        $comment[Creating the array to split the given elements.]
        $createArray[totalList;$nonEscape[$djsEval["$get[{variable}]".split("{separator}").join(";");true]]]
    `.trim(),
},{
  name: "$createProgressBar",
  type: "djs",
  code: async d => {
    const data = d.util.aoiFunc(d);
    const [value, max, barLength = 15] = data.inside.splits;

    function createBar(value, max, barLength) {
      const progress = Math.round((value / max) * barLength);
      const progressText = "=".repeat(progress) + "-".repeat(barLength- progress);
      return progressText;
    }

    data.result = createBar(Number(value), Number(max), Number(barLength));
    return {
      code: d.util.setCode(data)
    }
  }
}]
