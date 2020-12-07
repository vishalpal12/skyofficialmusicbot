 Discord = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['h', 'cmd', 'command'],
	run: async (client, message, args) => {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Sky Bot™')
			.setURL('https://discord.gg/BnKUrye')
			.setAuthor(
				'Sky Official Bot',
				'',
				''
			) 
			.setDescription(
				'Hello Guys. Welcome To {server} And Below Are My Commands'
			)
			.addFields(
				{
					name: 'Sky Official Commands',
					value: client.commands.map(cmd => `\`${cmd.name}\``).join(', ')
				},
				{ name: '\u200B', value: '\u200B' },
			)
			.addField('Server', 'https://discord.gg/BnKUrye', true)
			.setTimestamp()
			.setFooter(
				'Thank You For Being With Us',
				''
			);

		message.channel.send(exampleEmbed);
	}
};