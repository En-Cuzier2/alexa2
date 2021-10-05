const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
	
Asena.addCommand({pattern: 'alive', fromMe: true, desc: 'dose bot work / no'}, (async (message, match) => {

	        var r_text = new Array ();

        r_text[1] = "https://telegra.ph/file/3b20b361f75e1ccdfecb3.jpg";
        r_text[2] ="https://telegra.ph/file/e03e7e9258b292cf33cf1.jpg";
        r_text[3] ="https://telegra.ph/file/4b978de48c417dc1f4cb1.jpg";
        r_text[4] ="https://telegra.ph/file/d1eb8fabf9e772e419f1c.jpg";
        r_text[5] ="https://telegra.ph/file/3fe7cb3aeee6a6b17f5a0.jpg";

var i = Math.floor(06*Math.random())
var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*◄━━━━━━━⦁°👸°⦁━━━━━━━━►*\n⚜𝗛𝗲𝘆 𝗯𝘂𝗱𝘆 𝗶 𝗮𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄⚜\n\n*❍Developer ►* ```En cuzier```\n*❍Hosted  ►* ```Heroku cls```\n*❍Branche  ►* ```Hatzuhole main```\n*❍Moders  ►*```Queen Alexa team```\n*❍Git hub ►*```https://github.com/En-Cuzier/alexa2```\n\n\n    *ᴘᴏᴡᴇʀᴅ ʙʏ ǫᴜᴇᴇɴ ᴀʟᴇxᴀ*\n*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*'})
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
await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ' *╔═════◉ɴᴇᴏᴛʀᴏ◉═════╗*\n           🎭ɴᴇᴏᴛʀᴏ-𝙭🪐\n*❖═මීම් ලැයිස්තුව═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.macn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v* '})
    }));
}
