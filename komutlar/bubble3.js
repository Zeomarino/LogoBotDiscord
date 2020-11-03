const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://habbofont.net/font/bubble/"+isim+".gif"
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bubble3"],
  permLevel: 0
};
exports.help = {
  name: 'bubble3-logo',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};