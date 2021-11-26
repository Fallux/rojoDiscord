module.exports = {
    name: 'info',
    discription: 'embed file',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('https://isthereanydeal.com/')
            .setURL('https://isthereanydeal.com/')
            .setDescription('is there any deal is een wesbite die up to date houdt wat tot nu toe jouw wens games het goedkoopst is')
            .addFields(
                {name: 'rollen', value: 'We hebben een Among Us en een Minecraft rol'},
                {name: 'waarschuwing Syteem', value: 'We doen aan de 3 waarschuwingen en dan ban systeem'}
            )
            .setFooter('Keep calm and let the fun begin!');
           
            message.channel.send({embeds: [newEmbed]});
    }
}