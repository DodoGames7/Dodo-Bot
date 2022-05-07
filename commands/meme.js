const Discord = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

const { Meme } = require('leaf-utils');

module.exports = {
	data: new SlashCommandBuilder()
  .setName('meme')
  .setDescription('posts random memes'),
  async execute(interaction) {
  await Meme({
            message: interaction,
            slash_command: true,
            footer: true,
            time: 300000,
            label: {
                firstlabel: 'Next Meme',
                secondlabel: 'Stop',
            },
            emojis: {
                firstbutton: '↪️',
                secondbutton: '🛑',
            },
            colors: {
                firstbutton: 'PRIMARY',
                secondbutton: 'DANGER',
            },
            embedColor: 'RANDOM',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
  	},
};