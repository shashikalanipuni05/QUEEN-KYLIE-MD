const {cmd , commands} = require('../command')

cmd({
    pattern: "kylie",
    desc: "wallpaper the bot",
    category: "main",
    react: "☠",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY KYLIE WALLPAPER 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/eed77eda52d1b6c5b7f7d.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/9c65bd8725a13d45eb055.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/95c29c97cb944b6dea36e.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/12e26034900ec43a876d6.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
