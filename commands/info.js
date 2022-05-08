const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');


const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
  .setName('info')
  .setDescription('view important information'),
  async execute(interaction) {
    const embedinfo = new MessageEmbed()
    .setTitle('regarding discord.js mode')
    .setDescription('this literally isnt currently finished, i will try to do my best with it, with some js knowledge, if you have questions, want to check the source code then there are buttons shown below you can click')
    .setFooter('testing bot made by dodoGames')
    .setTimestamp();

     const supportbutton = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setURL('https://discord.gg/pFwKjAaZvj')
      .setLabel('support')
      .setStyle('LINK')
      .setDisabled(false)
     );

    const sourcecodebutton = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setURL('https://github.com/DodoGames7/Dodo-Bot/tree/djs-v13')
      .setLabel('Source Code')
      .setStyle('LINK')
      .setDisabled(false),
    );

    
    return interaction.reply({ embeds: [embedinfo], components: [supportbutton, sourcecodebutton]  });
    },
  
};
  
