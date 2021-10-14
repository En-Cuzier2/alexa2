const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'hi', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "hey! How.are you";
r_text[1] = "*මොකද කරන්නෙ*";
r_text[2] = "*ඔයාට කොහොමද ?*";
r_text[3] = "💚";
r_text[4] = "💙";
r_text[5] = "💜";
r_text[6] = "🤎";
r_text[7] = "🖤";
r_text[8] = "🤍";
r_text[9] = "👩‍💼";
r_text[10] = "👧";
r_text[11] = "👸";
r_text[12] = "🧝‍♀️";
r_text[13] = "🥰";
r_text[14] = "🤖";
r_text[15] = "👍";

var i = Math.floor(16*Math.random())

await message.sendMessage(r_text[i]);

}));
