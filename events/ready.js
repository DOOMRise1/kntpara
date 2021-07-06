const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('online')
var oyun = [
         `Coder By 1Ripeness`,
         "b?help",
         "BEST 💙 BOT",
         `${prefix}help +  ${client.guilds.cache.size} Serverss!`
   
  // Kafanıza Göre Değişebilirsiniz Durum Kısmı Bura
    ];

  console.log('Bot Başarıyla Başlatıldı!!')
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random] ,{
        type: "STREAMING",
        url: "https://www.twitch.tv/1Ripeness"
                                });
      
        }, 2 * 5000);

};
