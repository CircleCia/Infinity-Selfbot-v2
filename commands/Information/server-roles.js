const { Message, MessageEmbed } = require('discord.js-selfbot');
const settings = require("./../../settings.json");

module.exports = {
    name: 'server-roles',
    description: 'Displays every role in the server',
    usage: 'server-roles',
    aliases: ['sroles', 'serverroless', 'serverr'],
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        const roles = msg.guild.roles.cache.filter(role => role.id !== msg.guild.id).array();

        if (roles.length > 2000) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**This server has too many roles to list\n${msg.guild.roles.cache.size - 1} Roles**`).setTimestamp())

        const embed = new MessageEmbed()
            .setDescription(`**${roles.join(', ').length > 2048 ? roles.length : String(roles.join(', '))}**`)
            .setColor(settings.embedcolor)
            .setTimestamp()
            .setFooter(`There are ${msg.guild.roles.cache.size - 1} roles in total`)

        msg.channel.send(embed)
    }
}