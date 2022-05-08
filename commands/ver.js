const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
  .setName('version')
  .setDescription('view the current testing version'),
    async execute(interaction) {
    const embedver = new Discord.MessageEmbed()
    .setAuthor('made in djs', 'https://i.imgur.com/AfFp7pu.png')
    .setTitle('Version 1.6.2-test')
    .setDescription('added akinator game `\\akin`')
    .setColor('RANDOM');
		return interaction.reply({ embeds: [embedver] });
	},
  
};
