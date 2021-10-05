/* Codded by Teenu (re edited by en cuzier)
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'among ?(.*)', fromMe: false, desc: 'its make rainbow effect text' }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/amongus?apikey=2270813be0bf2e3fbf0415cc&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.image, caption: '*🎭ɴᴇᴏᴛʀᴏ𝙭🪐*' })
    }));
    Asena.addCommand({ pattern: '2attp ?(.*)', fromMe: false, desc: 'its make rainbow effect text' }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.lolhuman.xyz/api/attp2?apikey=2270813be0bf2e3fbf0415cc&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
