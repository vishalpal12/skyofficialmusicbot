const Discord = require("discord.js")
const fs = require("fs")
const botconfig = require("../botconfig.json");


module.exports = {
  name: "prefix",
  run: async (client, message, args) => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefix: botconfig.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    if(!message.member.hasPermission("ADMIN_GUILD")) return message.reply("Only The Users Have Server Admin Can Change The Prefix");

    if(!args[0]) return message.reply("Usage: g!prefix <Your Prefix>");

    prefixes[message.guild.id] = {
        prefix: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err)
    });

    let embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Prefix Set Successful")
    .setDescription(`Prefix Set To: ${args[0]}`)

    message.channel.send(embed)
    
  }
}