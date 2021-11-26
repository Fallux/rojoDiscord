module.exports = {
    name: 'ping',
    discription:'this is a ping command!! testing testing!!!',
    execute(message, args, Discord){
        
        if (message.member.roles.cache.some(r => r.name === "Among Us")) {
            message.channel.send('pang');
        } else{
            message.channel.send("better luck next time kiddo. You don't have the Among Us role");
        }
    }
}