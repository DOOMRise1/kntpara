const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async(client, message, args) => {
    let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        var bakiye = db.fetch(`para_${message.author.id}`)
        var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
        if(!hesapd){
          const embedd = Discord.MessageEmbed()
          
          .setAuthor('⚠️İlk Önce Hesabın Olmalı⚠️ = b?hesap-oluştur <hesap isim>')
          
          message.channel.send(embedd)
        }
          
        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`⚠️Zaten çalıştın, ${time.minutes}dk ve ${time.seconds}sn sonra tekrar çalışabilirsin!⚠️`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`bakiye_${message.author.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`${user}, çalıştın ve ${amount} kadar altın kazandın!`)


} 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['work'],
  permLevel: 0
};

exports.help = {
  name: 'çalış',
  description: 'work',
  usage: 'work'
};