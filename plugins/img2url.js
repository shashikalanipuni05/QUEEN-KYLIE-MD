const { cmd, commands } = require('../command')

cmd({
    pattern: ".img2url",
    react: "🔄",
    desc: "Image To Url",
    category: "convert",
    use: '.img2url',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{                   
                                  
         	let users = mek.mentionedJid ? mek.mentionedJid : mek.quoted ? mek.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.groupParticipantsUpdate(mek.chat, [users], 'img2url').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('🛑 YOUR IMAGE GOT URL CREATED ✅')
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Done ✓✓*')
l(e)
}
})
