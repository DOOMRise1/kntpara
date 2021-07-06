const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");//https://discord.gg/tgAP9ynscn
const db = require("quick.db");
const fs = require("fs");
const chalk = require("chalk");//https://discord.gg/tgAP9ynscn
const moment = require("moment");
var prefix = ayarlar.prefix;//https://discord.gg/tgAP9ynscn


client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});
//https://discord.gg/tgAP9ynscn
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


require("./util/eventLoader")(client);

client.login(process.env.token);
//https://discord.gg/tgAP9ynscn
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();//https://discord.gg/tgAP9ynscn
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);//https://discord.gg/tgAP9ynscn
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);//https://discord.gg/tgAP9ynscn
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);//https://discord.gg/tgAP9ynscn
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();//https://discord.gg/tgAP9ynscn
    } catch (e) {
      reject(e);
    }//https://discord.gg/tgAP9ynscn
  });//https://discord.gg/tgAP9ynscn
};//https://discord.gg/tgAP9ynscn

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//https://discord.gg/tgAP9ynscn
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//https://discord.gg/tgAP9ynscn
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
//https://discord.gg/tgAP9ynscn//https://discord.gg/tgAP9ynscn
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;//https://discord.gg/tgAP9ynscn//https://discord.gg/tgAP9ynscn
// client.on('debug', e => {//https://discord.gg/tgAP9ynscn
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));//https://discord.gg/tgAP9ynscn
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

process.on("unhandledRejection", (reason, promise) => {
  if (reason.message !== "Missing Permissions") {
    if (reason.message !== "Cannot read property 'send' of undefined") {
     if (reason.message === "Cannot read property 'name' of undefined") return;
  }}//https://discord.gg/tgAP9ynscn
 });

//https://discord.gg/tgAP9ynscn

//https://discord.gg/tgAP9ynscn//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn

//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn
//https://discord.gg/tgAP9ynscn

  client.login(process.env.token);

 client.on('message', msg => {
  if (msg.content.toLowerCase() === 'boteklendi') {
    msg.react('❤')
    msg.reply('**Teşekkürler**');
    permlvl: 4
  }
  }); 