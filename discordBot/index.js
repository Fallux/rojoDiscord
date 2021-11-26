const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const botConfig = require("./botconfig.json");



const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] }, { partials: ["MESSAGE", "CHANNEL", "REACTION"] });
client.login(botConfig.token);

const prefix = ';';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity('Jij', { type: 'REGISTREREN' });
    // client.channels.cache.get('910451095912988692').messages.fetch('913396227708682241')
});


client.on("messageCreate", message => {
    // console.log(message);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/  +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord, client);
    }

    if (command === 'info') {
        client.commands.get('info').execute(message, args, Discord, client);
    }

    if (command === 'welkom') {
        client.commands.get('welkom').execute(message, args, Discord, client);
    }


});


client.on('message', message => {
    if (message.content.toLowerCase() == ";embed") {
        let time = "AAAAAAAAAAAAAH";
        let players = "AAAAAAAAAAAAAH";
        let note = "AAAAAAAAAAAAAH";
        let embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('embed  title')
            .setAuthor('text', null, null)
            .addField('text', time, true)
            .addField('text', players, true)
            .setFooter('text ' + note, null)
        message.channel.send({ embeds: [embed] });
    }
});



