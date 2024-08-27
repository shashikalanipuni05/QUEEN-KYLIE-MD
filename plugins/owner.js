const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♀️𝐐𝐔𝐄𝐄𝐍 𝐊𝐘𝐋𝐈𝐄-𝐌𝐃 𝐕𝐈𝐏 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ᴏᴡɴᴇʀ* -: https://www.youtube.com/@Sahas_Tech

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/2e95d1e64336fd59b4017.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
