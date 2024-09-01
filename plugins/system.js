const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    react: "🧬",
    alias: ["status"],
    desc: "Check bot system status.",
    category: "genaral",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply,react}) => {
try{
    if(isGroup){
        const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${from}`); 
        if(fsh &&  (fsh?.error || fsh?.data?.type == 'false')) return;
         
 }else if(!isGroup){
        const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
        if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
      }
    var start = new Date().getTime();
var end = new Date ().getTime();
const ping = (end - start)

if (os.hostname().length == 12) {
  hostname = mg.replithostname
} else {
  if (os.hostname().length == 36) {
    hostname = mg.herokuhostname
} else {
    if (os.hostname().length == 8) {
      hostname = mg.koyebhostname
} else {
      hostname = os.hostname()
}}}

const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
const rtime = await runtime(process.uptime())

const txt = `╭───────────────────●●►
*├⚙️𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼 : ${hostname}*  
*├⏰𝚄𝙿𝚃𝙸𝙼𝙴 : ${rtime}*       
*├📟𝚁𝙰𝙼 : ${ram}*             
*├🌐𝙼𝙾𝙳𝙴 : ${mg.mode}* 
*├ 👾𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 1.0.0*              
*├👨‍💻𝙾𝚆𝙽𝙴𝚁𝚂 : masterx team*
╰───────────────────●●►

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
await conn.sendMessage(m.chat, { text:txt }, { quoted: mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
