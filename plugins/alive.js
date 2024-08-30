const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*╔╭────────────╮╕*
*╭│ⱧＥLLO, I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A QUEEN-KYLIE-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*

> *ᴜᴘᴛɪᴍᴇ:-  ${runtime(process.uptime())}*    
> *► ʀᴀᴍ ᴜꜱᴀɢᴇ:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
> *► ʜᴏꜱᴛ ɴᴀᴍᴇ:- ${os.hostname()}*
> *►ᴏᴡɴᴇʀ:- ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ*
> *► ᴠᴇʀꜱɪᴏɴ:- 1.0.0*

*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*
*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
return await conn.sendMessage(from,{image: {url: https://telegra.ph/file/9b44e3266c065df601430.jpg},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
