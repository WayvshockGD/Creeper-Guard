const { Channel } = require("discord.js")

module.exports = {
	name: 'test',
	description: 'Display info about this server.',
	execute(message) {
     
        message.channel.send('if you see this it means the bot works')
    },
}