const util = require("util");
const fs = require("fs");
const execFile = util.promisify(require("child_process").execFile);
const sizeOf = require("image-size");
const Discord = require("discord.js");
var colors = "GREEN";
module.exports = {
    name: "steal", 
    aliases: ["steal", "steals"],
    category: "SHURUHATIK",
    usage: "#steal",
    run: async function (shuruhatik, command, args, message) { 
         if (!message.member.hasPermission("MANAGE_EMOJIS"))
      return message.channel.send(
        `ليس لديك إذن لاستخدام هذا الأمر! إدارة Emojis`
      );
    var name = message.content.split(" ")[1];
    if (typeof name === 'undefined') {
     message.reply("❌ لا أستطيع الحصول على هذا الاسم")
    }   
     var url = message.content.split(" ")[2];
    if (typeof url === 'undefined') {
     message.reply("❌ أستطيع الحصول على هذا الرابط")
    }   
    const file = getFileOut(message);
    await saveFile(url, file);


    const imgDimensions = sizeOf(file);

    if (imgDimensions.width <= 128 && imgDimensions.height <= 128) {
      await saveEmoji(message, url, name);
    } else {
      const img = await resizeImage(file, imgDimensions.type, "128", message);
      await saveEmoji(message, img, name);
    }
    deleteImage(file);
  }
};

async function deleteImage(file) {
  fs.unlink(file, err => {
    if (err) throw err;
    return Promise.resolve();
  });
}


async function resizeImage(file, type, imgSize, msg) {
  if (type == "gif") {

    if (msg) {
      msg.channel.send("Processing...");
    }
    await execFile(gifsicle, ["--resize-fit-width", imgSize, "-o", file, file]);
    const fileSize = await getFilesizeInBytes(file);
    if (fileSize > 256000) {
      return Promise.resolve(resizeImage(file, type, imgSize / 2));
    } else {
      return Promise.resolve(file);
    }
  } else {
    return Promise.resolve(
      await sharp(file)
        .resize(128, 128)
        .toBuffer()
    );
  }
}

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return Promise.resolve(fileSizeInBytes);
}

async function saveEmoji(message, file, name) {
  return message.guild.emojis
    .create(file, name)
    .then(emoji => {
      let shuruhatikembed = new Discord.MessageEmbed()
      .setTitle(`Successfully uploaded **${name}** ${emoji}.`)
      .setFooter(`Bot by www.shuruhatik.xyz/`)
      .setColor(colors)
      message.channel.send(shuruhatikembed);
      return Promise.resolve();
    })
    .catch(e => {
      message.channel.send(`غير قادر على إنشاء رموز تعبيرية لسبب: ${e}`);
      return Promise.resolve();
    });
}


function getFileOut(message) {
  return `./shuruhatik${message.id}`;
}


async function saveFile(url, saveAs) {
  if (fs.existsSync(saveAs)) {
    return;
  } else {
    await execFile("curl", [url, "-o", saveAs]);
    return Promise.resolve();
  }
  
}