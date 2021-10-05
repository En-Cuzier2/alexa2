/* # Exclusively from Neutro project 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# En cuzier 
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "You can PNG from any Emoji"
const iii = "```YOU MUST ENTER EMOJI!``` \n\n *[queen alexa]*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'emoji ?(.*)', fromMe: true, desc: "converts emoji to png" } , (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '```made by Queen Alexa```'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'emoji ?(.*)', fromMe: false, desc: "converts emoji to png" }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '```made by Queen Alexa```'})

    }));
}
