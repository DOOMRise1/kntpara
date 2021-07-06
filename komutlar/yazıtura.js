const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var list = ["Yazı","Tura", "Yazı", "Tura", "Tura", "Yazı", "Tura", "Yazı"];
        var snc = list[Math.floor(Math.random()*4)];
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Para atılıyor... <a:dnenark:858464760068571136> ")).then(message=>{
            setTimeout(function(){
                message.edit(new Discord.MessageEmbed()
                .setTitle(`Para atıldı **${snc}** çıktı!`)
                .setColor("RANDOM"))
            },3000)
        })
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'yazı-tura'
}

// https://cdn.discordapp.com/emojis/858331879018594334.gif?v=1