const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
var colors = "GREEN";
module.exports = {
    name: "addemoji", 
    aliases: ["addemoji", "emojiadd"],
    category: "SHURUHATIK",
    usage: "#emojiadd",
    run: async function (shuruhatik, command, args, message) { 
          if (!message.member.hasPermission("MANAGE_EMOJIS")) {

            return message.channel.send(`ليس لديك إذن لاستخدام هذا الأمر!`)
        }
        const emoji = args[0];

        if (!emoji) return message.channel.send(`من فضلك أعطني إيموجي!`);

        let customemoji = Discord.Util.parseEmoji(emoji);

        if (customemoji.id) {

            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${

              customemoji.animated ? "gif" : "png"

            }`;

            const name = args.slice(1).join(" ");

            message.guild.emojis.create(`${Link}`,`${name || `${customemoji.name}`}`
).catch(error => {

                console.log(error)

            })

            const Added = new MessageEmbed()
                .setTitle(`Successfully added **${name || `${customemoji.name}`}** :${name || `${customemoji.name}`}:`)
                .setColor(colors)
                .setFooter(`Bot by www.shuruhatik.xyz/`)
                .setThumbnail(Link)
            return message.channel.send(Added).catch(e => {
                console.log(e)
            })
        } else {

            let CheckEmoji = parse(emoji, {

                assetType: "png"

            });

            if (!CheckEmoji[0])

                return message.channel.send(`من فضلك أعطني رمز تعبيري صالح!`);

            message.channel.send(`يمكنك استخدام Emoji عادي دون إضافة في الخادم!`);
        }
   }
}