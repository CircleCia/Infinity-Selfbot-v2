const { Message, MessageEmbed } = require('discord.js-self');
const akaneko = require('akaneko');
const Functions = require("./../../utils/Functions.js")

module.exports = {
    name: 'orgy',
    description: 'Oh i see, you are a  man of culture as well',
    usage: 'orgy',
    /**
     * @param {msg} msg
     */
    async execute(msg, args) {
        if (msg.channel.type != "dm" && !msg.channel.nsfw) return Functions.SilentModeSend(new MessageEmbed().setTitle("HiHi! This is Self-Bot-Chan~~ in your service!").setDescription("This is not a nsfw channel nor is it in dms, Master!"), msg.channel.id, msg, "Normal")
 nsfw = await akaneko.nsfw
 
   Functions.SilentModeSend(new MessageEmbed().setDescription("Here you go Master!").setImage(await nsfw.orgy()), msg.channel.id, msg, "Normal")

    }}