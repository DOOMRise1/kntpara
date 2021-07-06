const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async(client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('DARK_RED')
  .setThumbnail("https://cdn.discordapp.com/attachments/855154831899361353/855561519856877588/BEST.png")
  .setTimestamp()
  .setImage(`https://cdn.discordapp.com/attachments/855896918025830475/855901440483917834/standard.gif`)
  .setDescription(`
   **<a:gif:855567879067140096> BEST BOT Yardım Komutları <a:gif:855567879067140096>**
   
    <a:tik:855570616690147338> - **BEST BOT Para Komutları**
    *param, daily, paramenu, market, work, orman, odunsat, slots, sıralama, zindan, zindansat, çantam, maden, madensat, sat, satın-al, balıktut, bildir, hesap-oluştur*
    
    
    
    ***Prefix: b?***
    `)
  .setFooter(client.user.username, client.user.avatarURL);
  
  
  message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["paramenu", "pm"],
  permLevel: 0 
};

exports.help = {
  name: 'pm', 
  description: 'paramenu',
  usage: 'paramenu'
};