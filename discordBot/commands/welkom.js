module.exports = {
    name: 'welkom',
    discription: 'getting your role by adding a reaction',
    execute(message, args, Discord, client) {
        const channel = '910451095912988692'
        const playerRole = '910465689406554152'
        const amongUsRole = '910453514759708682'

        const playerRoleEmoji = '☑️';
        const amongUsEmoji = '🔴';
        message.delete();
        const embed = new Discord.MessageEmbed()
            .setTitle('verified')
            .setDescription('als je klaar bent met de regels en accepteer dat je de regels hebt gelezen klik op ☑️ voor de player role. kies')
            .setColor('#00f4ff');
        let messageEmbed = message.channel.send({ embeds: [embed] }).then(embedMessage => {
            embedMessage.react(playerRoleEmoji);
            embedMessage.react(amongUsEmoji);
        });
        client.on('messageReactionAdd', (reaction, user) => {
            if (user.bot) return;
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == playerRoleEmoji) {
                    message.guild.members.cache.get(user.id).roles.add(playerRole);
                } else if (reaction.emoji.name == amongUsEmoji) {
                    message.guild.members.cache.get(user.id).roles.add(amongUsRole);
                } else {
                    return;
                }
            }
        });

        client.on('messageReactionRemove', (reaction, user) => {
            if (user.bot) return;
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name == amongUsEmoji) {
                    message.guild.members.cache.get(user.id).roles.remove(amongUsRole);
                } else {
                    return;
                }
            }
        });

      



    }
}