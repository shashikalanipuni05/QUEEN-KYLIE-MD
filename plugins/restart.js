const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    react: "♻️",
    desc: "restart bot",
    category: "owner",
    use: '.restart',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
try{
    if (!isOwner) return;
    await conn.sendMessage(m.chat , { text : mg.restartmg } , { quoted: mek } );
    process.exit(143)
} catch (e) {
reply('*Error !!*')
l(e)
}
})
