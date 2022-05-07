const Discord = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
  .setName('info')
  .setDescription('view important information'),
  async execute(interaction) {
    const embedinfo = new Discord.MessageEmbed()
    .setTitle('regarding discord.js mode')
    .setDescription('this literally isnt currently finished, i will try to do my best with it, with some js knowledge, most likely the bot is running through [Glitch](https://glitch.com/edit/#!/dodo-bot-discord-bot)')
    .setFooter('testing bot made by dodoGames')
    .setTimestamp();
    return interaction.reply({ embeds: [embedinfo] });
    },
  
};
  