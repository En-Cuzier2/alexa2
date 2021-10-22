const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.LANG == 'SI') {
if (Config.NEOY == 'xyz') {

    Asena.addCommand({pattern: 'menu', fromMe: true, desc: 'dontaddcommandlist'}, (async (message, match) => {
            
            var image = await axios.get (Config.MENU_LOGO, {responseType: 'arraybuffer'})
       
        await message.sendMessage (Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `*⊰᯽⊱┈──╌❊  ❊╌──┈⊰᯽⊱*
*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*
 *⦁◊═⦁QUEEN 👸 ALEXA⦁═◊⦁*
      ```Private```
*◄━━━━━━━⦁⦁◯⦁⦁━━━━━━━━►*
 
╭─────────────────●►
│ *⚜COMMAND PANALE⚜*
│─────────────────●►
│ *▣cmd* ```.alive```
│ *▣cmd* ```.alexa```
│ *▣cmd* ```.owner```
│ *▣cmd* ```.cuzierX```
│ *▣cmd* ```.memes```
│ *▣cmd* ```.bhelp```
│ *▣cmd* ```.help```
│ *▣cmd* ```.pxmedia```
│ *▣cmd* ```.moretxt```
╰─────────────────●►

╭─────────────────●►
│  *⚕OTHER COMMANDS⚕*
│─────────────────●►
│ *❍cmd* ```.yt```
│ *❍cmd* ```.audio```
│ *❍cmd* ```.youtube```
│ *❍cmd* ```.img```
│ *❍cmd* ```.sticker```
│ *❍cmd* ```.photo```
│ *❍cmd* ```.mp3```
│ *❍cmd* ```.covid```
│ *❍cmd* ```.rashmika```
╰─────────────────●►

`}) 

 }));
 }
}
