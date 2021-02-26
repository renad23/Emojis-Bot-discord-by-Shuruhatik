const express = require("express");
const app = express();
app.listen(() => console.log(`

██████████████████████████████████████████████████████████████
█▄─▄─▀█─▄▄─█─▄─▄─███▄─▄█─▄▄▄▄███─▄▄▄▄█─▄─▄─██▀▄─██▄─▄▄▀█─▄─▄─█
██─▄─▀█─██─███─██████─██▄▄▄▄─███▄▄▄▄─███─████─▀─███─▄─▄███─███
▀▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▀▀▀▄▄▄▀▄▄▄▄▄▀▀▀▄▄▄▄▄▀▀▄▄▄▀▀▄▄▀▄▄▀▄▄▀▄▄▀▀▄▄▄▀▀`));
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const shuruhatik = new Discord.Client();
const shhuruhatik = require("./shuruhatik.json");
const prefix = shhuruhatik.prefix;

var handler = require("@tomdev/discord.js-command-handler")
var cmdhandler = new handler(shuruhatik, "/commands", prefix)

shuruhatik.on("message", (message) => {
    cmdhandler.handleCommand(message)
})

shuruhatik.on("ready", () => {
  shuruhatik.user.setActivity(shhuruhatik.status, {
        type: 'PLAYING'
    });
  console.log(`
    |------------------------------------------------|
    |                                                |
    | - All Copyrights To https://www.shuruhatik.xyz/|
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Your link was uploaded successfully 24 hours |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Status : Good                                |
    | - Upload speed : 1 minutes                     |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Uptime Url :                                 |
    | ${shhuruhatik.URLProject} |
    |                                                |
    |------------------------------------------------| `)
  guild.emojis.create('./path/to/file.png', 'NewEmoji', { roles: collectionOfRoles, reason: 'New emoji added for fun!' });

})

const Monitor = require('ping-monitor');
let shuruhatikuptime = new Monitor({
    website: shhuruhatik.URLProject,
    interval: "1",
    config: {
      intervalUnits: 'minutes'
    }
  });
 shuruhatikuptime.on('up', function (res, state) {
    console.log('Yay!! Service is up');
    console.log(`
    |------------------------------------------------|
    |                                                |
    | - All Copyrights To https://www.shuruhatik.xyz/|
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Your link was uploaded successfully 24 hours |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Status : Good                                |
    | - Upload speed : ${shuruhatik24h.timeuptime ||"1"} minutes                     |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Uptime Url :                                 |
    | ${shuruhatik24h.url} |
    |                                                |
    |------------------------------------------------|
        `)
  });
  

  shuruhatikuptime.on('error', function (error, res) {
    console.error(error);
  });


shuruhatik.login(process.env.token)
