const { Message, MessageEmbed } = require('discord.js-self');
const akaneko = require('akaneko');
const Functions = require("./../../utils/Functions.js")
const settings = require("./../../settings.json");

module.exports = {
    name: 'hentai',
    description: 'General Hentai',
    usage: 'hentai',
    /**
     * @param {msg} msg
     */
    async execute(msg, args) {
        if (msg.channel.type !== "dm" && !msg.channel.nsfw) return Functions.SilentModeSend(new MessageEmbed().setTitle("HiHi! This is Self-Bot-Chan~~ in your service!").setDescription("This is not a nsfw channel nor is it in dms, Master!").setColor("RED"), msg.channel.id, msg, "Normal")
        let nsfw = akaneko.nsfw
 
   await Functions.SilentModeSend(new MessageEmbed().setDescription("Here you go Master!").setImage(await nsfw.hentai()).setFooter("Sexy").setTimestamp().setColor(settings.embedcolor), msg.channel.id, msg, "Normal")

    }}