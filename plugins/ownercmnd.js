const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'show the bot owners command'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/3fe7cb3aeee6a6b17f5a0.jpg";
    r_text[1] = "https://telegra.ph/file/d1eb8fabf9e772e419f1c.jpg";
    r_text[2] = "https://telegra.ph/file/4b978de48c417dc1f4cb1.jpg";
    r_text[3] = "https://telegra.ph/file/ad6da8cf7b2f61717a4bc.jpg";
    r_text[4] = "https://telegra.ph/file/e03e7e9258b292cf33cf1.jpg";
    r_text[5] = "https://telegra.ph/file/2ee7da329678fdf999341.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*❲QUEEN ALEXA OWNER COMMAND❳**

 *◄━━━━━━━⦁⦁👸⦁⦁━━━━━━━━►*
 *QUEEN ALEXA OWNER COMMAND*
 *◄━━━━━━━⦁⦁❲◯❳⦁⦁━━━━━━━━►*

*🥏command* : ```.alive```
*⚜desc*     : ```its show your bot working```

*🥏command* : ```.block```
*⚜desc*     : ```block person own your choice```

*🥏command* : ```.unblock```
*⚜desc*     : ```unblock your blocked number```

*🥏command* : ```.rename```
*⚜desc*     : ```rename your group name```

*🥏command* : ```.setvarWORK_TYPE:public / private```
*⚜desc*     : ```its set your bot work type```

*🥏command* : ```.ban```
*⚜desc*     : ```remove the tag person```


*ᴛʜᴀɴᴋ ꜰᴏʀ ᴜꜱɪɴɢ ǫᴜʀᴇɴ ᴀʟᴇxᴀ*
*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*
`}) 

 }));
}
