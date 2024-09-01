const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "👀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`╭───────────────────●●►
*├⚙️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${os.hostname()*
*├⏰𝚄𝙿𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}*       
*├📟𝚁𝙰𝙼 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*          
*├🌐𝙼𝙾𝙳𝙴 : ${mg.mode}* 
*├ 👾𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 1.0.0*              
*├👨‍💻𝙾𝚆𝙽𝙴𝚁𝚂 : Sahas Nethsara*
╰───────────────────●●►

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

