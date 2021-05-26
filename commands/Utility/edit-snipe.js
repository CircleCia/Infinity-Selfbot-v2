const { MessageEmbed } = require("discord.js-selfbot-updated");
const settings = require("./../../settings.json");

module.exports = {
    name: 'edit-snipe',
    description: 'Fetches the most recent edited message within the channel',
    usage: 'edit-snipe',
    aliases: ['esnipe'],
    async execute(msg, args) {

        const esnipedb = msg.client.editMsgBefore.get(`${msg.channel.id}`);
        const esnipeda = msg.client.editMsgAfter.get(`${msg.channel.id}`);

        if (!esnipedb) return msg.channel.send(new MessageEmbed().setColor(`RED`).setDescription(`**There are no messages to edit-snipe**`).setTimestamp())

        let embed = new MessageEmbed()
            .setColor(settings.embedcolor)
            .setAuthor(`Edited by ${esnipedb.author.tag}`, esnipedb.author.displayAvatarURL())
            .setThumbnail(esnipedb.author.displayAvatarURL)
            .addField(`Before:`, esnipedb.content || "**Cannot display embeds**")
            .addField(`After:`, esnipeda.content || "**Cannot display embeds**")
            .setTimestamp()

        msg.channel.send(embed)

    }
}