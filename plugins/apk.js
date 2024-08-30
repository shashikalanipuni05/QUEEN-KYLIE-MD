cmd({
    pattern: "dapk",
    dontAddCommandList: true,
    filename: __filename
},
async (conn, m, mek, { from, q, reply }) => {
try{
await conn.sendMessage(from, { react: { text: '📥', key: mek.key }})
if(!q) return await conn.sendMessage(from , { text: '*Need apk link...*' }, { quoted: mek } ) 
const data = await apkdl.download(q)
let sendapk = await conn.sendMessage(from , { document : { url : data.dllink  } , mimetype : 'application/vnd.android.package-archive' , fileName : data.name + '.' + 'apk',caption: '*ᴠᴀᴊɪʀᴀ-ᴍᴅ•ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*' } , { quoted: mek })
await conn.sendMessage(from, { react: { text: '📁', key: sendapk.key }})
await conn.sendMessage(from, { react: { text: '✔', key: mek.key }})
} catch (e) {
    reply('*ERROR !!*')
  l(e)
}
})
