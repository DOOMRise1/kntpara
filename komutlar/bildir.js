const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
      if(!args[0]) {
  const embedd = new Discord.MessageEmbed()
  .setAuthor("BEST", client.user.avatarURL())
  .setDescription(`
  Lütfen ne yapmak istediğinizi belirtiniz.
  b?bildir öneri <öneriniz> -> Öneri bildirmenizi sağlar:
  b?bildir bug <bugunuz> -> Bug bildirmenizi sağlar:
    
    `)
  message.channel.send(embedd)
  }
  
  
  const embed = new Discord.MessageEmbed()
  .setAuthor("BEST", client.user.avatarURL())
  .setDescription(`
  Lütfen ne yapmak istediğinizi belirtiniz.
  a?bildir öneri <öneriniz> -> Öneri bildirmenizi sağlar:
  a?bildir bug <bugunuz> -> Bug bildirmenizi sağlar
  `)
  
if(args[0] === "öneri") {  
    const öneri = args.slice(1).join(' ');
    if(!öneri) return message.channel.send(` <@!${message.author.id}> Bir şeyler belirtmelisin. `)
       
  const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir öneride bulundular!")
  .addField("Belirtilen Öneri:", öneri)
  .addField("Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
  .setFooter(client.user.username, client.user.avatarURL())
  .setThumbnail(message.author.avatarURL({format: "gif"}))
  message.channel.send(`Öneriniz başarıyla iletildi!`)
  client.channels.cache.get("858455092083425330").send(embed)  
}
if(args[0] === "bug") {
  const bug = args.slice(0).join(' ');
  if(!bug) return message.channel.send(` <@!${message.author.id}> Bir şeyler belirtmelisin. `)
     
const embed = new Discord.MessageEmbed()
//.setTitle("Bana bir öneride bulundular!")
.addField("Belirtilen Bug:", bug)
.addField("Öneri Gönderen", `Adı: **${message.author.tag}** - Etiket: <@!${message.author.id}> - İd: **${message.author.id}**`)  
.setFooter(client.user.username, client.user.avatarURL())
.setThumbnail(message.author.avatarURL({format: "gif"}))
message.channel.send(`Bugunuz başarıyla iletildi!`)
client.channels.cache.get("858455092083425330").send(embed) 
  
}
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bildir"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "bildir",
usage: ""
}