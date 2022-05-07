const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { ButtonPages } = require('leaf-utils');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('lists all commands'),
  async execute(interaction) {
           const page1 = new Discord.MessageEmbed()
            .setTitle("Basic Commands")
            .setDescription('ping\n info\n version\n')
            .setColor('RANDOM')
            .setFooter('page 1/3')
            .setTimestamp()

        const page2 = new Discord.MessageEmbed()
            .setTitle("Fun Commands")
            .setDescription('snake\n c4\n ttt\n rps\n meme')
            .setColor('RANDOM')
            .setFooter('page 2/3')
            .setTimestamp()

        const page3 = new Discord.MessageEmbed()
            .setTitle("Util Commands")
            .setDescription('avatar')
            .setColor('RANDOM')
            .setFooter('page 3/3')
            .setTimestamp()

        const pages = [page1, page2, page3]

        await ButtonPages({
            message: interaction,
            slash_command: true,
            embeds: pages,
            time: 300000, // how long before buttons get disabled in ms
            back: {
                label: 'Previous',
                style: 'PRIMARY',
                emoji: '⬅',
            },
            next: {
                label: 'Next',
                style: 'PRIMARY',
                emoji: '➡',
            },
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })

 },
  
};
  
    