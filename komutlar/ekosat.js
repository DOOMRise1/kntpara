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
  const silah = db.get(`silah_${kllanç.id}`)
  const olta = db.get(`silah_${kllanç.id}`)
  const telefon = db.get(`silah_${kllanç.id}`)
  const balta = db.get(`balta_${kllanç.id}`)
  const btc = db.get(`btc_${kllanç.id}`)

  if(args[0] !== "silah" && args[0] !== "balta" && args[0] !== "telefon" && args[0] !== "olta" && args[0] !== "bitcoin") return message.channel.send(
new Discord.MessageEmbed()
.setAuthor("BEST", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n a?sat silah/balta/telefon/olta/bitcoin
`)
.setFooter("BEST", message.author.avatarURL())
.setTimestamp()
                                          )
  
if(args[0] === "silah") {
    let fiyatcık = 9000 // istediğiniz fiyat
    
if(!silah) return message.reply(`Hiç silahınız bulunmamakta!`)
  db.delete(`silah_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "balta") {
    let fiyatcık2 = 7000 // istediğiniz fiyat
    
      db.delete(`balta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "telefon") {
    let fiyatcık3 = 7000 // istediğiniz fiyat
    
      db.delete(`telefon_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "olta") {
    let fiyatcık4 = 3000 // istediğiniz fiyat
    
      db.delete(`olta_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
  if(args[0] === "bitcoin") {
    let fiyatcık5 = 4352 // istediğiniz fiyat
    
      db.delete(`btc_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık5)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık5}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'sat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}