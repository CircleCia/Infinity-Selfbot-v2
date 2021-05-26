const { MessageEmbed } = require('discord.js-self');
const superagent = require('superagent');
const settings = require("./../../settings.json");

module.exports = {
    name: 'cat',
    description: 'Returns an image of a cat',
    usage: 'cat',
    /**
     * @param {Message} msg
     */
    async execute(msg, args) {

        var { body } = await superagent.get(`https://nekos.life/api/v2/img/meow`)

        let embed = new MessageEmbed()
            .setColor(settings.embedcolor)
            .setDescription(`**Here's a cat to brighten your day**`)
            .setImage(body.url)
            .setTimestamp()
        msg.channel.send(embed)
    }
}