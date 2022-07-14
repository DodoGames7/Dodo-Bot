module.exports = {
  name: "wordle",
  code: `$djsEval[(async () => {
      const {
            Wordle
        } = require('leaf-utils');

await Wordle({
    message: message,
    slash_command: false,
    time: 300000,
    wordle: [
        "actor",
        "acute",
        "album",
        "about",
        "agent",
        "alarm",
        "alert",
        "apple",
    ], 
    embed: {
        title: "Wordle",
        color: "#F38E05",
    },
    invalidMessage: "This is not a valid word",
    shortMessage: "The provided word does not contain 5 characters",
    winMessage: "GG, You win",
    loseMessage: "Try again, the correct word was {{word}}",
    timeoutMessage: "Time is up",
});

})()]`
}
