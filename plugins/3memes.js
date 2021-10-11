/* # Exclusively from Neutro / alexa project 
# Do not use this fore any commercial thing
# Author En cuzier 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*Need some Word*"
const Ln = "Make memes your own "
 const code = "╔════════════════════╗\n║   😹 *Meme World* 😹\n║\n║\n╠═══ *🎭commands🎭*\n║\n╠══ *.bocca*\n╠══ *.mymeme*\n╠══ *.santha*\n╠══ *.chaina*\n╠══ *.bomu*\n╠══ *.saduni*\n╠══ *.tharindu*\n║\n╚════════════════════╝"

if (Config.WORKTYPE == 'private') {
    
      Asena.addCommand({pattern: 'cuzier98', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));

    Asena.addCommand({ pattern: 'ballo ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
     Asena.addCommand({ pattern: 'anew ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
       Asena.addCommand({ pattern: 'saantha ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
      Asena.addCommand({ pattern: 'chaina ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
        Asena.addCommand({ pattern: 'bomuthe ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
  Asena.addCommand({ pattern: 'namki ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

}));
  
  Asena.addCommand({ pattern: 'tharindu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

}));


}

else if (Config.WORKTYPE == 'public') {
    
        Asena.addCommand({pattern: 'cuzier98', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));

    Asena.addCommand({ pattern: 'bocca ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
       Asena.addCommand({ pattern: 'mymeme ?(.*)', fromMe: false , dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=Bocca&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4f8ec319795a05f7d0cf5.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
       Asena.addCommand({ pattern: 'santha ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/32880d3d04d269923eca7.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
        Asena.addCommand({ pattern: 'chaina ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/e91e8daa9a99a234ccca8.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
          Asena.addCommand({ pattern: 'bomu ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=${encodeURIComponent(match[1])}&bottom=%20&img=https://telegra.ph/file/5f8e5f3a06abc0a95aef1.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

    }));
  
  Asena.addCommand({ pattern: 'saduni ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e77a02d9a702eec32bd4.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

}));
  
  Asena.addCommand({ pattern: 'tharindu ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  if (match[1] === '') return await message.sendMessage(ll);

  var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/05a04ecbc5c1d0603d6e6.jpg/revision/latest/top-crop/width/450/height/500?cb=20190205115000`, { responseType: 'arraybuffer' })

  await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '```Made by Queen alexa 2021```' })

}));


    
}
