const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
   let ekoban = db.get(`sistemban_${message.author.id}`)
 if(ekoban) return message.channel.send(
 new Discord.MessageEmbed()
   .setAuthor("Sistem Banı!", message.author.avatarURL())
   .setDescription(`
Ekonomi sisteminden \`${ekoban}\` sebebiyle banlanmışsınız!
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/)'na katılarak söyleyebilirsin.
   `)
   .setFooter("BEST", client.user.avatarURL())
   .setTimestamp()
 )
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const silah = db.get(`meseodunu_${kllanç.id}`)
  const olta = db.get(`husodunu_${kllanç.id}`)
  const telefon = db.get(`koyumeseodunu_${kllanç.id}`)
  const balta = db.get(`ladinodunu_${kllanç.id}`)

  if(args[0] !== "huş" && args[0] !== "meşe" && args[0] !== "koyu-meşe" && args[0] !== "ladin") return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("BEST", client.user.avatarURL())
.setDescription(`
 Satmak istediğiniz eşyanın id sini giriniz. Örnek \n a?odun-sat huş/meşe/koyu-meşe/ladin
`)
.setFooter("BEST", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "meşe") {
  let mese = db.get(`meseodunu_${kllanç.id}`)
 let sayı = args[1] 
    let fiyatcık = 120*sayı // istediğiniz fiyat
    
if(!silah) return message.reply(`Hiç meşe odununz bulunmamakta!`)
  if(sayı > mese) return message.channel.send(`Çantandaki **Meşe** den daha fazla meşe satamazsın!`)
  db.delete(`meseodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "ladin") {
      let mese = db.get(`ladinodunu_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık2 = 125*sayı // istediğiniz fiyat
    
  if(!balta) return message.reply(`Hiç ladin odununz bulunmamakta!`)  
      if(sayı > mese) return message.channel.send(`Çantandaki **Ladin** den daha fazla ladin satamazsın!`)
      db.delete(`ladinodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "huş") {
      let mese = db.get(`husodunu_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık3 = 120*sayı // istediğiniz fiyat
    
    if(!olta) return message.reply(`Hiç huş odununz bulunmamakta!`)
      if(sayı > mese) return message.channel.send(`Çantandaki **Huş** dan daha fazla huş satamazsın!`)
      db.delete(`husodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "koyu-meşe") {
      let mese = db.get(`koyumeseodunu_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık4 = 150*sayı // istediğiniz fiyat
    
    if(!telefon) return message.reply(`Hiç koyu meşe odununz bulunmamakta!`)
      if(sayı > mese) return message.channel.send(`Çantandaki **Koyu Meşe** den daha fazla Koyu meşe satamazsın!`)
      db.delete(`koyumeseodunu_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["odun-sat"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'odunsat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}