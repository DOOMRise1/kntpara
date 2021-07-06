const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setDescription(
      `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074120776)`
    )
    .setImage(`https://cdn.discordapp.com/attachments/855786793257271306/856922447257534504/reklam.gif`)
    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);
  
  message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "mdavet",
  description: "davet",
  usage: "mdavet"
};
