const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif"+isim
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["arrow", "arrowlogo"],
  kategori: 'logolar',
  permLevel: 0
};
exports.help = {
  name: 'arrow-logo',
  description: 'Logo Yaparsınız',
  usage: ''
};