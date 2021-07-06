const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('quick.db')
  const ms = require('parse-ms');
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
var bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapdurum_${message.author.id}`)
var demirkazma = db.get(`demirkazma_${message.author.id}`)
var elmaskazma = db.get(`elmaskazma_${message.author.id}`)
var taşkazma = db.get(`taşkazma_${message.author.id}`)
let cd = 200000 //30 saniye şuan kendinize göre ayarlayınız
let sure = await db.fetch(`calissüre_${message.member.id}`)
     
      if (sure !== null && cd - (Date.now() - sure) > 0) {
        let timeObj = ms(cd - (Date.now() - sure)) 
      message.channel.send(`Bir daha maden kazmak için biraz beklemen gerekli **${timeObj.seconds} saniye** sonra tekrar dene!`).then(msg => msg.delete({ timeout: `${cd}`}))
    } else {
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `b?hesap-oluştur <isim>`")

   if(!args[0]) return message.reply(`Bir maden belirtiniz. Örnek: n\`b?maden zümrüt/elmas/altın/demir/taş`)
if(args[0] === "zümrüt") {
    if(!elmaskazma) return message.reply(`Hiç elmas kazmanız bulunmamaktadır! a?market`)
        let maden = Math.round(Math.random() * 1)
        db.add(`zümrüt_${message.author.id}`, maden)
message.channel.send(`
Madendeyken Zümrüt kazıyodun ve ${maden} adet zümrüt kazandın
`)
}
if(args[0] === "elmas") {
  if(!demirkazma) return message.reply(`Hiç demir kazmanız bulunmamaktadır! a?market`)
  let maden4 = Math.round(Math.random() * 6)
        db.add(`elmas_${message.author.id}`, +maden4)
  message.channel.send(`
Madendeyken Elmas kazıyodun ve ${maden4} adet elmas kazandın
`)
}
if(args[0] === "altın") {
    if(!demirkazma) return message.reply(`Hiç demir kazmanız bulunmamaktadır! a?market`)
  let maden3 = Math.round(Math.random() * 4)
        db.add(`altın_${message.author.id}`, +maden3)
message.channel.send(`
Madendeyken Altın kazıyodun ve ${maden3} adet altın kazandın
`)
}
if(args[0] === "demir") {
      if(!taşkazma) return message.reply(`Hiç taş kazmanız bulunmamaktadır! a?market`)
        let maden2 = Math.round(Math.random() * 8)
        db.add(`demir_${message.author.id}`, +maden2)
  message.channel.send(`
Madendeyken Demir kazıyodun ve ${maden2} adet demir kazandın
`)
}
if(args[0] === "taş") {
  let maden5 = Math.round(Math.random() * 30)
        db.add(`taş_${message.author.id}`, +maden5)
     message.channel.send(`
Madendeyken Taş kazıyodun ve ${maden5} adet taş kazandın
`)
}     
      
       

  
   db.set(`calissüre_${message.member.id}`, Date.now())
                     }
}
					 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['maden-kaz', 'madenkaz'],
  permLevel: 0
};

exports.help = {
  name: 'maden', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};