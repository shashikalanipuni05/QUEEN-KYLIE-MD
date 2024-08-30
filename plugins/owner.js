const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*╔╭────────────╮╕*
*╭│ⱧEY, Here Is My Owner Info │─◎◎▷*
*╘╰────────────╯╜*
*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ (ꜱᴀʜᴀꜱ ᴛᴇᴄʜ)*
*⚡ɴᴜᴍʙᴇʀ* -: 94718913389
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/8e7b91d1b98bf020d15a2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
