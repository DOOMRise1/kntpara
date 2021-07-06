const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');



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
if(message.author.id !== "747435392969605242") if(message.author.id !== "747435392969605242") return message.channel.send("Hey! Bu Komutu Kullanmaya Hakkın Yok!!");
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiye_${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurum_${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismi_${silinecekkllnc.id}`);
  const soygunlog = db.get(`soygunlog_${silinecekkllnc.id}`)
  const silah = db.get(`silah_${silinecekkllnc.id}`)
  const olta = db.get(`olta_${silinecekkllnc.id}`)
  const telefon = db.get(`telefon${silinecekkllnc.id}`)
  const balta = db.get(`balta_${silinecekkllnc.id}`)
  const btc = db.get(`btc_${silinecekkllnc.id}`)

    const elmaskılıç = db.get(`elmaskılıç_${message.author.id}`)
  const demirkılıç = db.get(`demirkılıç_${message.author.id}`)
  const taşkılıç = db.get(`taşkılıç_${message.author.id}`)
  
  const elmasbalta = db.get(`elmasbalta_${message.author.id}`)
const demirbalta = db.get(`demirbalta_${message.author.id}`)
const taşbalta = db.get(`taşbalta_${message.author.id}`)

var demirkazma = db.get(`demirkazma_${message.guild.id}`)
var elmaskazma = db.get(`elmaskazma_${message.guild.id}`)
var taşkazma = db.get(`taşkazma_${message.guild.id}`)

  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiye_${silinecekkllnc.id}`)
  db.delete(`hesapdurum_${silinecekkllnc.id}`)
  db.delete(`hesapismi_${silinecekkllnc.id}`)
  db.delete(`banka_${message.author.id}`)
  db.set(`banka_${message.author.id}`, 0)
  db.set(`tahtakazma_${message.author.id}`, 1)
  db.set(`balta_${message.author.id}`, 1)
  db.set(`silah_${silinecekkllnc.id}`, "Yok.")
  db.set(`telefon_${silinecekkllnc.id}`, "Yok.")
  db.set(`olta_${silinecekkllnc.id}`, "Yok.")
  db.set(`btc_${silinecekkllnc.id}`, "Yok.")
  db.set(`elmaskazma_${silinecekkllnc.id}`, "Yok.")
  db.set(`demirkazma_${silinecekkllnc.id}`, "Yok.", 0)
  db.set(`taşkazma_${silinecekkllnc.id}`, "Yok.")
  db.set(`elmasbalta_${silinecekkllnc.id}`, "Yok.")
  db.set(`demirbalta_${silinecekkllnc.id}`, "Yok.")
  db.set(`taşbalta_${silinecekkllnc.id}`, "Yok.")
  db.set(`elmaskılıç_${silinecekkllnc.id}`, "Yok.")
  db.set(`demirkılıç_${silinecekkllnc.id}`, "Yok.")
  db.set(`taşkılıç_${silinecekkllnc.id}`, "Yok.")
  db.set(`silah_${silinecekkllnc.id}`, "Yok.")
  message.channel.send(`:+1:`)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hesapsil'],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'tag-taraması <tag>'
}