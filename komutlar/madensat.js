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
Eğer itirazının varsa [Destek Sunucusu](https://discord.gg/Eq67w5gkD7)'na katılarak söyleyebilirsin.
   `)
   .setFooter("BEST", client.user.avatarURL())
   .setTimestamp()
 )
    let member = message.author;
  let kllanç = message.mentions.users.first() || message.author;
  
  const bakiye = await db.fetch(`bakiye_${kllanç.id}`);
  const elmas = db.get(`elmas_${kllanç.id}`)
  const altın = db.get(`altın_${kllanç.id}`)
  const demir = db.get(`demir_${kllanç.id}`)
  const zümrüt = db.get(`zümrüt_${kllanç.id}`)
  const taş = db.get(`taş_${kllanç.id}`)

    if(args[0] !== "elmas" && args[0] !== "zümrüt" && args[0] !== "altın" && args[0] !== "demir" && args[0] !== "taş") return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("BEST", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n b?maden-sat elmas/zümrüt/altın/demir/taş
`)
.setFooter("BEST", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "elmas") {
      let elmas = db.get(`elmas_${kllanç.id}`)
 let sayı = args[1] 
    let fiyatcık = 250*sayı // istediğiniz fiyat
    
if(!elmas) return message.reply(`Hiç elmasınız bulunmamakta!`)
  if(sayı > elmas) return message.channel.send(`Çantandaki elmasdan daha fazla satamazsın!`)
  db.add(`elmas_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "zümrüt") {
        let zümrüt = db.get(`zümrüt_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık2 = 400*sayı // istediğiniz fiyat
    
  if(!zümrüt) return message.reply(`Hiç zümrütünüz bulunmamakta!`)  
    if(sayı > zümrüt) return message.channel.send(`Çantandaki zümrütden daha fazla satamazsın!`)
      db.add(`zümrüt_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "altın") {
        let altın = db.get(`altın_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık3 = 50*sayı // istediğiniz fiyat
    
    if(!altın) return message.reply(`Hiç altınınız bulunmamakta!`)
    if(sayı > altın) return message.channel.send(`Çantandaki altından daha fazla satamazsın!`)
      db.add(`altın_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "demir") {
    let demir = db.get(`demir_${kllanç.id}`)
     let sayı = args[1] 
    let fiyatcık4 = 30*sayı // istediğiniz fiyat
    
    if(!demir) return message.reply(`Hiç demiriniz bulunmamakta!`)
    if(sayı > demir) return message.channel.send(`Çantandaki demirden daha fazla satamazsın!`)
      db.add(`demir_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "taş") {
let taş = db.get(`taş_${kllanç.id}`)      
     let sayı = args[1]
    let fiyatcık4 = 3*sayı // istediğiniz fiyat
    
    if(!taş) return message.reply(`Hiç taşınız bulunmamakta!`)
          if(sayı > taş) return message.channel.send(`Çandandaki taşdan daha fazla satamazsınız!`)
      db.add(`taş_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["maden-sat"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'madensat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}