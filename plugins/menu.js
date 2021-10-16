const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'menu', fromMe: true, desc: 'it shows bot command list'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://ibb.co/NZWtyCx";
    r_text[1] = "https://telegra.ph/file/4efb53aba19b0f1ccad12.jpg";
    r_text[2] = "https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
    r_text[3] = "https://telegra.ph/file/7b068a15a9b0adb97064d.jpg";
    r_text[4] = "https://telegra.ph/file/b92174516f031df6ebd26.jpg";
    r_text[5] = "https://telegra.ph/file/b92174516f031df6ebd26.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ```Made by ⦁═⦁ ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ ⦁═⦁


*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*
  *❲QUEEN ALEXA PANALE❳*
*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*

╭───────────────────⦁►
│  *❄ALEXA PANALE❄*
│───────────────────⦁►
│
│```▣ .alexa```
│```▣ .alive```
│```▣ .owner```
│```▣ .help```
│```▣ .txtit```
│```▣ .moretxt
│
│───────────────────⦁►
│   *QUEEN ALEXA BETA*
╰───────────────────⦁►

`}) 

 }));
}
