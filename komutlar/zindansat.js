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
  const zombiet = db.get(`zombiet_${message.author.id}`)
  const örümcekgöz = db.get(`örümcekgöz_${message.author.id}`)
  const ok = db.get(`ok_${message.author.id}`)
  const yay = db.get(`yay_${message.author.id}`)
  const ip = db.get(`ip_${message.author.id}`)
  const barut = db.get(`barut_${message.author.id}`)
  const enderman = db.get(`endergöz_${message.author.id}`)

    if(args[0] !== "zombi-et" && args[0] !== "örümcek-göz" && args[0] !== "ok" && args[0] !== "yay" && args[0] !== "ip" && args[0] !== "barut" && args[0] !== "enderman-gözü") return message.channel.send(
    new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("BEST", client.user.avatarURL())
.setDescription(`
Satmak istediğiniz eşyanın id sini giriniz. Örnek \n a?zindan-sat zombi-et/örümcek-göz/ok/yay/ip/barut/enderman-gözü
`)
.setFooter("BEST", client.user.avatarURL())
.setTimestamp()
)
  
if(args[0] === "zombi-et") {
 let sayı = args[1] 
    let fiyatcık = 30*sayı // istediğiniz fiyat
    
if(!zombiet) return message.reply(`Hiç zombi etiniz bulunmamakta!`)
if(sayı > zombiet) return message.channel.send(`Çantanızdaki **zombi etinden** daha fazla zombi et satamazsınız!`)
  db.add(`zombiet_${kllanç.id}`, -sayı)
  db.add(`bakiye_${kllanç.id}`, +fiyatcık)
  
  return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık}`)
}
  if(args[0] === "örümcek-göz") {
     let sayı = args[1] 
    let fiyatcık2 = 65*sayı // istediğiniz fiyat
    
  if(!örümcekgöz) return message.reply(`Hiç örümcek gözünüz bulunmamakta!`)  
    if(sayı > örümcekgöz) return message.channel.send(`Çantanızdaki **örümcek gözden** daha fazla örümcek göz satamazsınız!`)
      db.delete(`örümcekgöz_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
    if(args[0] === "ip") {
     let sayı = args[1] 
    let fiyatcık2 = 15*sayı // istediğiniz fiyat
    
  if(!ip) return message.reply(`Hiç ipiniz bulunmamakta!`)  
      if(sayı > ip) return message.channel.send(`Çantanızdaki **ipden** daha fazla ip satamazsınız!`)
      db.delete(`ip_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık2)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık2}`)
}
  if(args[0] === "ok") {
     let sayı = args[1] 
    let fiyatcık3 = 5*sayı // istediğiniz fiyat
    
    if(!ok) return message.reply(`Hiç okunuz bulunmamakta!`)
    if(sayı > ok) return message.channel.send(`Çantanızdaki **okdan** daha fazla ok satamazsınız!`)
      db.delete(`ok_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık3)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık3}`)
}
  if(args[0] === "yay") {
     let sayı = args[1] 
    let fiyatcık4 = 25*sayı // istediğiniz fiyat
    
    if(!yay) return message.reply(`Hiç yayınız bulunmamakta!`)
    if(sayı > yay) return message.channel.send(`Çantanızdaki **yaydan** daha fazla yay satamazsınız!`)
      db.delete(`yay_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "enderman-gözü") {
     let sayı = args[1] 
    let fiyatcık4 = 70*sayı // istediğiniz fiyat
    
    if(!enderman) return message.reply(`Hiç enderman gözünüz bulunmamakta!`)
      if(sayı > enderman) return message.channel.send(`Çantanızdaki **enderman gözünden** daha fazla enderman göz satamazsınız!`)
      db.delete(`endergöz_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
    if(args[0] === "barut") {
     let sayı = args[1] 
    let fiyatcık4 = 55*sayı // istediğiniz fiyat
    
    if(!barut) return message.reply(`Hiç barutunuz bulunmamakta!`)
      db.delete(`barut_${kllanç.id}`, "Kapalıdır")
  db.add(`bakiye_${kllanç.id}`, +fiyatcık4)
    
    return message.reply(`Ürünü başarıyla sattınız. Kazandığınız para: ${fiyatcık4}`)
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["zindan-sat"],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'zindansat',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}