const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



exports.run = async(client, message, args) => {
      let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/Eq67w5gkD7)'na katılarak söyleyebilirsin.
   `)
   .setFooter("BEST", client.user.avatarURL())
   .setTimestamp()
 )      	
    
  let transkllanç = message.mentions.users.first()
  if(!transkllanç) return message.channel.send("Lütfen Birini Etiketleyin.");
  let kllanç = message.author
  let para = args[1]
  if(transkllanç == kllanç) return message.channel.send(`Kendinize para gönderemezsiniz.`)
  if(transkllanç.bot == true) return message.channel.send(`Botlara para gönderemezsiniz.`)
  if(!transkllanç) return message.channel.send(`Bir kullanıcı girmelisiniz. Doğru Kullanım; btransfer @${client.user.tag} 50`)
  if(!para) return message.channel.send(`Bir miktar girmelisiniz. Doğru Kullanım; btransfer @${client.user.tag} 50`)
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismi_${kllanç.id}`);
  
  const transbakiye = await db.fetch(`bakiye_${transkllanç.id}`);
  const transhesapdurumu = await db.fetch(`hesapdurum_${transkllanç.id}`);
  const transhesapismi = await db.fetch(`hesapismi_${transkllanç.id}`);
  
  if(!hesapdurumu) {
    message.reply(`İlk olarak hesap oluşturmalısın. bhesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapdurumu) {
        message.reply(`İlk olarak hesap oluşturmalısın. bhesap-oluştur <Hesap İsmi>`)
      }
      
        if(hesapdurumu) {   
            if(bakiye < para) return message.channel.send(`:warning: Paranız Yetersiz!`)
            if(!transhesapdurumu) return message.channel.send(`Transfer etmek istediğin kullanıcının bir hesabı bulunmamakta.`)
            if(transhesapdurumu) {
                db.add(`bakiye_${message.author.id}`, -para)
                db.add(`bakiye_${transkllanç.id}`, para)
                transkllanç.send(`${message.author.tag} adlı kullanıcı size \`${para} BESTCOİN yolladı`)
                message.channel.send(`${transkllanç} adlı kullanıcıya başarıyla ${para} BESTCOİN yolladınız.`)
              }
          }
        }
      
    }
  }


    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['paragonder', 'paragönder', 'para-gonder', 'para-gönder'],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'transfer',
    description: 'Hesabınızdan başka bir hesaba para transferi yaparsınız.',
    usage: 'transfer <@kullanıcı>',
}
