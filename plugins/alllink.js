/* codded by En cuzier 

use this git under copyright
dont change credit
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const Pinky = require('../pinky')
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);

}
var alllink_var = ''
async function megalink() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        alllink_var = vars.ALL_LINK_BAN
    });
}
megalink()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*Bağlantı Aşkarlandı!*'
if (Config.LANG == 'TR') ldc = '*‎Link Tespit Edildi!*'
if (Config.LANG == 'EN') ldc = '*Link Detected! mone ee link ivde allowed alla appo pinne engane , oke bye \n\n 🕊🕊*'
if (Config.LANG == 'ML') ldc = '*ലിങ്ക് കണ്ടെത്തി!*'
if (Config.LANG == 'ID') ldc = '*Tautan Terdeteksi!*'
if (Config.LANG == 'PT') ldc = '*Link Detectado!*'
if (Config.LANG == 'RU') ldc = '*Ссылка обнаружена!*'
if (Config.LANG == 'HI') ldc = '*लिंक का पता चला!*'
if (Config.LANG == 'ES') ldc = '*Enlace Detectado!*'
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (alllink_var == 'true' && message.jid !== '9082891698-1616356915@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
    }
}));

var alllink_var = ''
async function afn() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        AI_var = vars.Z_PINKY_AI
    });
}
afn()
var plk1 = ''
var plk2 = ''
var plk3 = ''
var plk4 = ''
var plk5 = ''
var plk6 = ''
var plk7 = ''
var plk8 = ''
var plk9 = ''

 if (Config.LANG == 'ML') {
         plk1 = '```എല്ലാ കമാൻഡുകളും ലഭിക്കാൻ .alexa ടൈപ്പ് ചെയ്യുക```'
         plk2 = 'എന്റെ പേര് '
         plk3 = 'അതെ എന്നോട് പറയൂ, ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും'
         plk4 = '👻Boo-o-o-oh👻'
         plk5 = 'എനിക്കറിയാം അവൻ എന്റെ സ്രഷ്ടാവാണെന്ന്'
         plk6 = 'ᴍᴏꜱꜱ , ꜱᴀʜᴀʟ , ᴄʜᴇʀʀʏ , ꜰᴀʀʜᴀɴ'
         plk7 = 'ഞാൻ .... ആഹ് ഞാൻ ആരാണെന്ന് എനിക്കറിയില്ല \n ഞാൻ ആരാണെന്ന് നിങ്ങൾക്കറിയാമെങ്കിൽ ദയവായി എന്നോട് പറയു🥺🥺'
         plk8 = 'ആരെങ്കിലും എന്നെ സഹായിക്കൂ, ഈ വ്യക്തി മോശമായി സംസാരിക്കുന്നു \n ഞാൻ ഒരു നല്ല പെൺകുട്ടിയാണ് ... \n\n ട്രിൻ..ട്രിൻ ... *ഹലോ പോലീസ് സ്റ്റേഷൻ *'
         plk9 = ' https://github.com/En-Cuzier/alexa2 '
      }//afnanplk creation
    else {
        plk1 = '*to get all commands type .alexa*'
        plk2 = 'Hey ! im '
        plk3 = '*Yeh bro tell me how can i help you*'
        plk4 = '*What do you want*'
        plk5 = 'i know him he is my creator'
        plk6 = 'En-Cuzier , Mr.chaby , Torny mark , Teenuh , MashZ'
        plk7 = 'i am .... aah i dont know who i am \n please tell me if you know who i am 🥺🥺'
        plk8 = 'somebody help me this person is talking bad things \n i am a good girl...\n\n trin..trin... *hello police station*'
        plk9 = ' https://github.com/En-Cuzier/alexa2 '
    }  


Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
   if (AI_var == 'true' && message.jid !== '919562803423-1627735504@g.us') {
    
        let regex1 = new RegExp('command')
        let regex2 = new RegExp('name')
        let regex3 = new RegExp('bot')
        let regex4 = new RegExp('pinky')
        let regex5 = new RegExp('afnanplk')
        let regex6 = new RegExp('supporter')
        let regex7 = new RegExp('Who are you')
        let regex8 = new RegExp('nude')
        let regex9 = new RegExp('Git')
        let regex10 = new RegExp(Pinky.OA_NAME)
        if (regex1.test(message.message)) {              
            await message.client.sendMessage(message.jid,plk1, MessageType.text, {quoted: message.data })
        } 
        else if (regex2.test(message.message)) {
           await message.client.sendMessage(message.jid,plk2 + Pinky.OB_NAME, MessageType.text, {quoted: message.data })
        }
         else if (regex3.test(message.message)) {
            await message.client.sendMessage(message.jid,plk3, MessageType.text, {quoted: message.data })
        }
        else if (regex4.test(message.message)) {
           await message.client.sendMessage(message.jid,plk4, MessageType.text, {quoted: message.data })
        }
        else if (regex5.test(message.message)) {
          await message.client.sendMessage(message.jid,plk5, MessageType.text, {quoted: message.data })
        }
         else if (regex6.test(message.message)) {
           await message.client.sendMessage(message.jid,plk6, MessageType.text, {quoted: message.data })
        }
         else if (regex7.test(message.message)) {
           await message.client.sendMessage(message.jid,plk7, MessageType.text, {quoted: message.data })
        }//created by afnanplk
         else if (regex8.test(message.message)) {
           await message.client.sendMessage(message.jid,plk8, MessageType.text, {quoted: message.data })
        }
         else if (regex9.test(message.message)) {
   await message.client.sendMessage(message.jid,plk9, MessageType.text, {quoted: message.data })
        }
        else if (regex10.test(message.message)) {
   await message.client.sendMessage(message.jid,Pinky.OA_REPLY, MessageType.text, {quoted: message.data })
        }      
   }
}));
