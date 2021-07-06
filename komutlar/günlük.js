const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  
  let timeout = 86400000;
  let eklenecek = 500;
  
  
  let gunluk = await db.fetch(`gunluk_${message.guild.id}_${message.author.id}`);
  
  if(gunluk !== null && timeout - (Date.now() - gunluk) > 0){
     let time = ms(timeout - (Date.now() - gunluk));
     return message.channel.send(`:warning: Zaten günlük ödülünü almışsın. ${time.days} gün, ${time.hours} saat, ${time.minutes} dakika, ve ${time.seconds} saniye içinde geri dön. :warning: `)
        } else {
          
            db.add(`cüzdan_${message.guild.id}_${message.author.id}`, eklenecek);
            db.set(`gunluk_${message.guild.id}_${message.author.id}`, Date.now());

          let time = ms(timeout - (Date.now() - gunluk));
         const embed = new Discord.MessageEmbed()
         .setTitle(`**GÜNLÜK**`)
         .setDescription(`Başarıyla hesabına ${eklenecek} kadar altın eklendi.`)
         .addField(`Destek sunucuma`,`[katılmak için tıkla](link)`)
          message.channel.send(embed)
  }

 
 
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['daily'],
  permLevel: 0
};

exports.help = {
  name: 'günlük',
  description: 'Günlük para verir',
  usage: 'günlük'
};