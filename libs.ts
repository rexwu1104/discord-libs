import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'Orca',
		url: 'https://github.com/cee-studio/orca',
		language: 'C',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Discord.Net',
		url: 'https://github.com/discord-net/Discord.Net',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'Discord.Net Labs',
		url: 'https://github.com/Discord-Net-Labs/Discord.Net-Labs',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'DSharpPlus',
		url: 'https://github.com/DSharpPlus/DSharpPlus',
		language: 'C#',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: 'Yes',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version',
		timeouts: 'Dev Version'
	},
	{
		name: 'DisCatSharp',
		url: 'https://github.com/Aiko-IT-Systems/DisCatSharp',
		language: 'C#',
		apiVer: '9',
		gwVer: '9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'Remora.Discord',
		url: 'https://github.com/Nihlus/Remora.Discord',
		language: 'C#',
		apiVer: '9',
		gwVer: '9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'aegis.cpp 🪦',
		url: 'https://github.com/zeroxs/aegis.cpp',
		language: 'C++',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'D++',
		url: 'https://github.com/brainboxdotcc/DPP',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'Discord++',
		url: 'https://github.com/DiscordPP/discordpp',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Sleepy Discord',
		url: 'https://github.com/yourWaifu/sleepy-discord',
		language: 'C++',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'discljord',
		url: 'https://github.com/discljord/discljord',
		language: 'Clojure',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'discordcr',
		url: 'https://github.com/shardlab/discordcr',
		language: 'Crystal',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		buttons: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		selectMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/shardlab/discordcr/pull/31'
		},
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'nyxx',
		url: 'https://github.com/nyxx-discord/nyxx',
		language: 'Dart',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'coxir',
		url: 'https://github.com/satom99/coxir',
		language: 'Elixir',
		apiVer: 9,
		gwVer: 8,
		slashCommands: 'No',
		buttons: 'Yes',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Nostrum',
		url: 'https://github.com/Kraigie/nostrum',
		language: 'Elixir',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'arikawa',
		url: 'https://github.com/diamondburned/arikawa',
		language: 'Go',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'Dev Version'
	},
	{
		name: 'DiscordGo',
		url: 'https://github.com/bwmarrin/discordgo',
		language: 'Go',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/1058'
		},
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/982'
		},
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/1032'
		},
		timeouts: 'Dev Version'
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'Disgord',
		url: 'https://github.com/andersfylling/disgord',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Dev Version',
		buttons: 'Yes',
		selectMenus: 'No',
		threads: 'Dev Version',
		guildStickers: 'Yes',
		contextMenus: 'Dev Version',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Calamity',
		url: 'https://github.com/simmsb/calamity',
		language: 'Haskell',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'catnip',
		url: 'https://github.com/mewna/catnip',
		language: 'Java',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/mewna/catnip/pull/640'
		},
		timeouts: 'No'
	},
	{
		name: 'Discord4J',
		url: 'https://github.com/Discord4J/Discord4J',
		language: 'Java',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Dev Version',
			url: 'https://github.com/Discord4J/Discord4J/issues/958'
		},
		guildStickers: 'No',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/Discord4J/Discord4J/pull/1046'
		},
		timeouts: {
			text: 'Has a PR',
			url: 'https://github.com/Discord4J/Discord4J/pull/1051'
		}
	},
	{
		name: 'Javacord',
		url: 'https://github.com/Javacord/Javacord',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'JDA',
		url: 'https://github.com/DV8FromTheWorld/JDA',
		language: 'Java',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1971'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1971'
		},
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1905'
		},
		timeouts: 'Dev Version'
	},
	{
		name: 'Detritus',
		url: 'https://github.com/detritusjs/client',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Discordeno',
		url: 'https://github.com/discordeno/discordeno',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Dev Version',
		timeouts: 'Yes'
	},
	{
		name: 'discord.js',
		url: 'https://github.com/discordjs/discord.js',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'droff',
		url: 'https://github.com/tim-smart/droff',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Eris',
		url: 'https://github.com/abalabahaha/eris',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1275'
		},
		timeouts: {
			text: 'Has a PR',
			url: 'https://github.com/abalabahaha/eris/pull/1317'
		}
	},
	{
		name: 'Harmony',
		url: 'https://github.com/harmonyland/harmony',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes'
	},
	{
		name: 'SnowTransfer',
		url: 'https://github.com/DasWolke/SnowTransfer',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: '-',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes'
	},
	{
		name: 'Discord.jl',
		url: 'https://github.com/Xh4H/Discord.jl',
		language: 'Julia',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Kord',
		url: 'https://github.com/kordlib/kord',
		language: 'Kotlin',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Dev Version',
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/kordlib/kord/pull/328'
		},
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'Dev Version'
	},
	{
		name: 'Discordia',
		url: 'https://github.com/SinisterRectus/Discordia',
		language: 'Lua',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'lacord',
		url: 'https://github.com/Mehgugs/lacord',
		language: 'Lua',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'Dimscord',
		url: 'https://github.com/krisppurg/dimscord',
		language: 'Nim',
		apiVer: '6, 8, and 9',
		gwVer: '8 and 9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Dev Version',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'DiscordPHP',
		url: 'https://github.com/discord-php/DiscordPHP',
		language: 'PHP',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Yes',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version',
		timeouts: 'Dev Version'
	},
	{
		name: 'RestCord',
		url: 'https://github.com/restcord/restcord',
		language: 'PHP',
		apiVer: '6 stable, 9 dev',
		gwVer: '-',
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'Dev Version',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/restcord/restcord/pull/166'
		},
		timeouts: 'No'
	},
	{
		name: 'discord-py-interactions',
		url: 'https://github.com/goverfl0w/discord-interactions',
		language: 'Python',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'discord.py 🪦',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'No',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'disnake 🍴',
		url: 'https://github.com/DisnakeDev/disnake',
		language: 'Python',
		apiVer: '8 stable, 9 dev',
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'enhanced-discord.py 🍴',
		url: 'https://github.com/iDevision/enhanced-discord.py',
		language: 'Python',
		apiVer: 8,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/iDevision/enhanced-discord.py/pull/105'
		},
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes'
	},
	{
		name: 'hata',
		url: 'https://github.com/HuyaneMatsu/hata',
		language: 'Python',
		apiVer: '6, 7, 8, and 9',
		gwVer: '6, 7, 8, and 9',
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'hikari',
		url: 'https://github.com/hikari-py/hikari',
		language: 'Python',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/811'
		},
		guildStickers: 'Yes',
		contextMenus: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/924'
		},
		autocomplete: {
			text: 'Has a PR',
			url: 'https://github.com/hikari-py/hikari/pull/924'
		},
		scheduledEvents: 'No',
		timeouts: 'Yes'
	},
	{
		name: 'nextcord 🍴',
		url: 'https://github.com/nextcord/nextcord',
		language: 'Python',
		apiVer: 8,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: {
			text: 'Has a PR',
			url: 'https://github.com/nextcord/nextcord/pull/272'
		},
		timeouts: 'Yes'
	},
	{
		name: 'pycord 🍴',
		url: 'https://github.com/Pycord-Development/pycord',
		language: 'Python',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'discordrb',
		url: 'https://github.com/shardlab/discordrb',
		language: 'Ruby',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'discord-rs',
		url: 'https://github.com/SpaceManiac/discord-rs',
		language: 'Rust',
		apiVer: 6,
		gwVer: 6,
		slashCommands: 'No',
		buttons: 'No',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	},
	{
		name: 'Serenity',
		url: 'https://github.com/serenity-rs/serenity',
		language: 'Rust',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'No',
		timeouts: 'Yes'
	},
	{
		name: 'Twilight',
		url: 'https://github.com/twilight-rs/twilight',
		language: 'Rust',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes',
		autocomplete: 'Yes',
		scheduledEvents: 'Yes',
		timeouts: 'Yes'
	},
	{
		name: 'AckCord',
		url: 'https://github.com/Katrix/AckCord',
		language: 'Scala',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'Dev Version',
		autocomplete: 'Dev Version',
		scheduledEvents: 'Dev Version',
		timeouts: 'Dev Version'
	},
	{
		name: 'SwiftDiscord',
		url: 'https://github.com/nuclearace/SwiftDiscord',
		language: 'Swift',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		slashCommands: 'Dev Version',
		buttons: 'Dev Version',
		selectMenus: 'No',
		threads: 'No',
		guildStickers: 'No',
		contextMenus: 'No',
		autocomplete: 'No',
		scheduledEvents: 'No',
		timeouts: 'No'
	}
]
