const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ (ꜱᴀʜᴀꜱ ᴛᴇᴄʜ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ -:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/c6c986c3df88b830c8c2a.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
