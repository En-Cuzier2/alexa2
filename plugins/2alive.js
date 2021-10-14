const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'alive', fromMe: true, desc: 'dose bot work / no'}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/4cfb624b62a43fbfc6799.jpg";
        r_text[2] ="https://telegra.ph/file/e879753f94c48be027cb1.jpg";
        r_text[3] ="https://telegra.ph/file/46d0e571df3366938119b.jpg";
        r_text[4] ="https://telegra.ph/file/31ff0b4ec7548399e1944.jpg";
        r_text[5] ="https://telegra.ph/file/395822c1f497c9778ba64.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*◄━━━━━━⦁⚬❲❄❳⚬⦁━━━━━━►*\n⚜𝗛𝗲𝘆 𝗯𝘂𝗱𝘆 𝗶 𝗮𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄⚜\n\n*▣Developer ►* ```En cuzier```\n*▣Hosted      ►* ```Heroku cls```\n*▣Branche    ►* ```Hatzuhole main```\n*▣Git hub      ►* ```https://github.com/En-Cuzier```\n*▣Moders     ►* ```Queen Alexa team```\n                         ⛥ ```Mr.chaby```\n                         ⛥ ```Teenuh```\n                         ⛥ ```MashZ```\n                         ⛥ ```Torny Mark```\n\n       *ᴘᴏᴡᴇʀᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*'})
    }));
}
else if (Config.WORKTYPE == 'public') {
	
	Asena.addCommand({pattern: 'alive', fromMe: false,}, (async (message, match) => {

	        var r_text = new Array ();

                r_text[1] = "https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
        r_text[2] ="https://telegra.ph/file/b92174516f031df6ebd26.jpg";
        r_text[3] ="https://telegra.ph/file/7b068a15a9b0adb97064d.jpg";
        r_text[4] ="https://telegra.ph/file/4efb53aba19b0f1ccad12.jpg";
        r_text[5] ="https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*◄━━━━━━⦁⚬❲❄❳⚬⦁━━━━━━►*\n⚜𝗛𝗲𝘆 𝗯𝘂𝗱𝘆 𝗶 𝗮𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄⚜\n\n*▣Developer ►* ```En cuzier```\n*▣Hosted      ►* ```Heroku cls```\n*▣Branche    ►* ```Hatzuhole main```\n*▣Git hub      ►* ```https://github.com/En-Cuzier```\n*▣Moders     ►* ```Queen Alexa team```\n                         ⛥ ```Mr.chaby```\n                         ⛥ ```Teenuh```\n                         ⛥ ```MashZ```\n                         ⛥ ```Torny Mark```\n\n       *ᴘᴏᴡᴇʀᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*'})
    }));
}
