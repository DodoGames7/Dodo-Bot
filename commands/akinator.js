const { SlashCommandBuilder } = require('@discordjs/builders');

const akinator = require("discord.js-akinator");
const language = "en";
const childMode = true;
const gameType = "character"; 
const useButtons = true; 
const embedColor = "RANDOM";


module.exports = {
	data: new SlashCommandBuilder()
  .setName('akin')
  .setDescription('play akinator game!'),
    async execute(interaction) {
      akinator(interaction, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons, //Defaults to "false"
            embedColor: embedColor //Defaults to "RANDOM"
        });
  	},
};
