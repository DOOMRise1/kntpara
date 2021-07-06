const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')
let dbs = require("coders.db");
exports.run = async (client, message, args) => {
if(message.author.id !== "747435392969605242") if(message.author.id !== "747435392969605242") return message.channel.send("hoop bilader sahip komutu bu");
let rerole = message.guild.roles.cache.find(r => r.id === " ");

// The member you want to add the role to
let member = message.mentions.members.first();

// Add role to the member
member.roles.add(role);

// Or add it to yourself
message.author.roles.add(role);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "denem",
  description: "denem",
  usage: "denem"
};
