const { MessageEmbed } = require("discord.js-self");
const settings = require("./../../settings.json");
const os = require("os");
const moment = require("moment");
const gpuInfo = require('gpu-info');
const { format } = require("path");
const Functions = require("./../../utils/Functions.js")

module.exports = {
    name: 'pc-info',
    description: 'Retrieves your OS Information',
    usage: 'pc-info',
    aliases: ['pcinfo', 'osinfo'],
    async execute(msg, args) {

        gpuInfo().then(function (data) {

            var LoadingBarManager = require("./../../utils/loadingBar")

            var LoadingBar = new LoadingBarManager({
                full_char: "█",
                empty_char: "░",
                left_corner: "",
                right_corner: "",
                steps: 10
            })

            let t1 = Date.now()

            let CPU = os.cpus()

            let cpucore = Array.isArray(CPU) ? os.cpus().length : null

            function formatBytes(a, b = 2) { if (0 === a) return "0 Bytes"; const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024)); return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d] }

            const osuptime = os.uptime()

            let uptimee = moment.unix(osuptime).utc().format('H [hours,] m [minutes and] s [seconds]')

            let embed = new MessageEmbed()

                .setTitle(`${msg.client.user.tag}'s PC Information`)
                .setColor(settings.embedcolor)
                .setThumbnail(msg.author.displayAvatarURL())
                .setDescription(`__**Operating System Information**__
                > OS Platform: ${os.platform()}
                > OS Version: ${os.version()}
                > OS Uptime: ${uptimee}
                > Client Ping: ${Math.ceil(Date.now() - t1)}ms

                __**CPU Information**__
                > CPU Model: ${CPU[0].model}
                > CPU Core Count: ${cpucore}
                > CPU Base Clock: ${CPU[0].speed}Mhz
                
                __**GPU Information**__
                > GPU Model: ${data[0].Name}
                > color Ability (Coverage): ${data[0].CurrentNumberOfColors}
                > Current Resolution: ${data[0].CurrentHorizontalResolution}x${data[0].CurrentVerticalResolution}
                
                __**RAM Information**__
                > Total RAM: ${formatBytes(os.totalmem())}
                > Free RAM: ${formatBytes(os.freemem())}
                > Used RAM: ${formatBytes(os.totalmem() - os.freemem())}
                > Used RAM Diagram:
                > ${LoadingBar.generate(os.totalmem() - os.freemem(), os.totalmem())}`)
                .setFooter("Nice PC noob")
                .setTimestamp()

            Functions.SilentModeSend(embed, msg.channel.id, msg, "Normal")
        });
    }
}