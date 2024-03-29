const settings = require("./../settings.json");
const whitelist = require("./../whitelist.json");
const prefix = settings.prefix;
const DEBUG = false;

module.exports = async (msg) => {
	if (msg.channel.type == "dm") {
		if (msg.author.id != msg.client.user.id && whitelist.whitelisted.includes(msg.author.id) == false) return null;
		if (!msg.content.startsWith(prefix) || msg.author.bot) return;
		const args = msg.content.substring(prefix.length).split(/ +/)
		const cmd = args.shift().toLowerCase()

		let cmdObj = undefined
		if (!msg.client.fldrToggle && Object.keys(msg.client.commands).indexOf(cmd) !== -1) {
			cmdObj = msg.client.commands[cmd]
		} else if (msg.client.fldrToggle) {
			for (const [category, commands] of Object.entries(msg.client.commands)) {
				if (cmdObj) break;
				for (var command of Object.values(commands)) {
					if (command.aliases && Array.isArray(command.aliases) && command.aliases.indexOf(cmd) !== -1) {
						cmdObj = command
						break;
					} else if (command.name.toLowerCase() === cmd) {
						cmdObj = command
						break;
					}
				}
			}
		}

		if (DEBUG)
			console.log('[CMD OBJECT]', cmdObj, ' | cmd inputted:', cmd)

		if (cmdObj) {
			try {
				cmdObj.execute(msg, args)
				msg.delete()
			} catch (e) {
				if (DEBUG)
					msg.channel.send(String(e))
			}
		}
	} else {
		if (msg.author.id != msg.client.user.id && whitelist.whitelisted.includes(msg.author.id) == false) return null;
		if (!msg.content.startsWith(prefix) || msg.author.bot) return;
		const args = msg.content.substring(prefix.length).split(/ +/)
		const cmd = args.shift().toLowerCase()

		let cmdObj = undefined
		if (!msg.client.fldrToggle && Object.keys(msg.client.commands).indexOf(cmd) !== -1) {
			cmdObj = msg.client.commands[cmd]
		} else if (msg.client.fldrToggle) {
			for (const [category, commands] of Object.entries(msg.client.commands)) {
				if (cmdObj) break;
				for (var command of Object.values(commands)) {
					if (command.aliases && Array.isArray(command.aliases) && command.aliases.indexOf(cmd) !== -1) {
						cmdObj = command
						break;
					} else if (command.name.toLowerCase() === cmd) {
						cmdObj = command
						break;
					}
				}
			}
		}

		if (DEBUG)
			console.log('[CMD OBJECT]', cmdObj, ' | cmd inputted:', cmd)

		if (cmdObj) {
			try {
				cmdObj.execute(msg, args)
				msg.delete()
			} catch (e) {
				if (DEBUG)
					msg.channel.send(String(e))
			}
		}
	}
}