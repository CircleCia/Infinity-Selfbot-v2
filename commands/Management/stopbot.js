const { Message, MessageEmbed } = require("discord.js-self")
const Functions = require("./../../utils/Functions.js")
module.exports = {
    name: 'stopbot',
    description: 'Shutdowns the bot, pretty simple',
    usage: 'stopbot',
    /**
     * @param {msg} msg
     */
    async execute(msg, args) {
        await Functions.SilentModeSend("Bot Stopped!", msg.channel.id, msg, "Normal")
        process.exit(1)
    }
}