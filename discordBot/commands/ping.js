module.exports = {
    name: 'ping',
    discription: 'dit is een ping command!! testing testing!!!',
    execute(message, args, Discord) {

        if (message.member.roles.cache.some(r => r.name === "Among Us")) {
            message.channel.send('pang');
        } else {
            message.channel.send("Je hebt niet de Among Us role");
        }
    }
}