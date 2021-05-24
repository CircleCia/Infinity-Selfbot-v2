const { MessageEmbed } = require("discord.js-selfbot");
const settings = require("./../../settings.json")
const { writeFileSync } = require("fs");

module.exports = {
    name: 'afk-mode',
    description: 'Activates an auto response mode for dms',
    usage: 'afk-mode <Text/Off>',
    aliases: ['afkmode', 'afk'],
    async execute(msg, args) {

        if (settings.afk == undefined ? [] : settings.afk)
            if (settings.afk == undefined) {
                settings.afk = false
            }

        let input = args.join(" ") || "I'm currently away, please dm later"

        if (!input) {
            settings.afk = input

            let embed = new MessageEmbed()
                .setColor(settings.embedcolor)
                .setDescription(`**AFK Mode [Automatic]: ${input}**`)
                .setTimestamp()
            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))

        }

        if (input) {
            settings.afk = input

            let embed = new MessageEmbed()
                .setColor(settings.embedcolor)
                .setDescription(`**AFK Mode: ${input}**`)
                .setTimestamp()

            msg.channel.send(embed)

            writeFileSync("settings.json", JSON.stringify(settings))

            if (input.toUpperCase() == 'OFF') {

                settings.afk = false

                let embed = new MessageEmbed()
                    .setColor(settings.embedcolor)
                    .setDescription(`**AFK Mode: Disabled**`)
                    .setTimestamp()

                msg.channel.send(embed)

                writeFileSync("settings.json", JSON.stringify(settings))
            }

            writeFileSync("settings.json", JSON.stringify(settings))
        }
    }
}