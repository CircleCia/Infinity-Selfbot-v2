let interval;

const { MessageEmbed } = require("discord.js-self");
const { randomTime } = require("../../utils/Functions");
const settings = require("./../../settings.json")
const Functions = require("./../../utils/Functions.js")

module.exports = {
    name: 'autofarm-mee6',
    description: 'Autofarms MEE6 levels in the channel executed',
    usage: 'autofarm-mee6',
    aliases: ['afmee6', 'afm6'],
    async execute(msg, args) {
        if (msg.author.id !== msg.client.user.id) {
            const embed = new MessageEmbed()
                .setColor("RED")
                .setTitle('Error')
                .setDescription(`Sorry, but only the account im connected to can run this!`)
                .setFooter("Skill Issue")
                .setTimestamp()
            return Functions.SilentModeSend(embed, msg.channel.id, msg, "Normal")
        }
        msg.delete()

        let mesg = require("./../../assets/mee6msgs.json")

        if (!args[0]) return Functions.SilentModeSend(new MessageEmbed().setColor(`RED`).setDescription(`**Incorrect usage of command**`).setTimestamp(), msg.channel.id, msg, "Normal")

        if (args[0].toUpperCase() == 'ON')
            if (!interval) {
                Functions.SilentModeSend(new MessageEmbed().setColor(settings.embedcolor).setDescription(`**MEE6 Autofarm turned on**`).setTimestamp(), msg.channel.id, msg, "Normal")
                interval = setInterval(function () { msg.channel.send(mesg[Math.floor(Math.random() * mesg.length)]).then(mesg => { mesg.delete({ timeout: randomTime(2000, 3000) }) }) }, randomTime(61000, 62000))
                return;
            }

        if (args[0].toUpperCase() == 'OFF') {
            clearInterval(interval)
            interval = null
            Functions.SilentModeSend(new MessageEmbed().setColor(settings.embedcolor).setDescription(`**MEE6 Autofarm turned off**`).setTimestamp(), msg.channel.id, msg, "Normal")
        }
    }
}