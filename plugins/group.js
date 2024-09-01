const config = require('../config')
const { cmd, commands } = require('../command')

//........................................
cmd({
    pattern: "join",
    desc: "joins group by link",
    category: "owner",
    react:"🔗",
    use: '<group link.>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return;    
try{  
if (!q){ 
if(m.quoted && m.quoted.msg) {
q = m.quoted.msg
}else{
const mass = await conn.sendMessage(m.chat, { text: mg.wagrouplinknotfound }, { quoted: mek });
return await conn.sendMessage(m.chat, { react: { text: "⁉️", key: mass.key } });

}
}
    if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
       reply(mg.invalidwagrouplink);
    let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    await conn.groupAcceptInvite(result)
        .then((res) => reply(mg.groupjoinsuccess))
        .catch((err) => reply(mg.groupjoinerror));
} catch(e) {
console.log(e);
reply('Error!!')
} 
})
cmd({
    
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔊",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if (!isOwner || !isAdmins) return;  


    if (!m.isGroup) return reply(mg.onlygroup);
    if (!isBotAdmins) return reply(mg.needbotadmins);     
  
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*Group chat unmuted* 🔊' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔊', key: mass.key } });
} catch(e) {
console.log(e);
reply('*Error !!*')     
} 
})
cmd({

    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*Group chat muted* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*Error !!*')    
} 
})
cmd({
    pattern: "add",
    react: "🔆",
    desc: "Add that person in group",
    fromMe: true,
    category: "group",
    filename: __filename,
    use: '<number>',
},
 async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner  ||  !isAdmins)return;
try {

if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);
    if (!q) return reply(mg.nouserforadd);

    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await conn.groupParticipantsUpdate(m.chat, [users], "add");
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "hidetag",
    react: "📢",
    alias: ["htag"],
    desc: "Tags everyperson of group without mentioning their numbers",
    category: "group",
    filename: __filename,
    use: '<text>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner  ||  !isAdmins)return;
try { 
if (!m.isGroup) return reply(mg.onlygroup);

if (!isBotAdmins) return reply(mg.needbotadmins);
    conn.sendMessage(m.chat, {
        text: q ? text : "",
        mentions: participants.map((a) => a.id),
    }, {
        quoted: mek 
    });
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
pattern: "kick",
react: "🚫",
alias: [".."],
desc: "Kicks replied/quoted user from group.",
category: "group",
filename: __filename,
use: '<quote|reply|number>',
},           
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner ||  !isAdmins)return;
try {
    if (!m.isGroup) return reply(mg.onlygroup);
    if (!isBotAdmins) return reply(mg.needbotadmins);


const user = m.quoted.sender;
if (!user) return reply(mg.nouserforkick);
await conn.groupParticipantsUpdate(m.chat, [user], "remove");
reply(mg.userremoved);
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "demote",
    react: "⛔",
    desc: "Provides admin role to replied/quoted user",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner ||  !isAdmins )return;
         try {     if (!m.isGroup) return reply(mg.onlygroup);
            if (!isBotAdmins) return reply(mg.needbotadmins);

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? citel.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return reply(mg.nouserfordemote);
        await conn.groupParticipantsUpdate(m.chat, [users], "demote");
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
       pattern: "deactivate",
    react: "🔀",
    desc: "Dectivate a bot for the group",
    category: "owner",
    filename: __filename,
    use: '.deactivate',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
        if(isGroup &&( isOwner || isItzcp)){ 
          if(config.DOWNLOADSAPI !== ''){
              const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
              if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}?groupjid=${from}&type=false`); 
                reply(mg.deactivatbotingroup)
            }else{
            reply(mg.devoffsetting)}
        }
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "delsudo",
    react: "🛑",
    desc: "Deactivate a bot for the user",
    category: "devoloper",
    filename: __filename,
    use: '.delsudo',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
          if(!isGroup){ 
            if(config.DOWNLOADSAPI !== ''){
                if(!m?.quoted?.sender) return;
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}?groupjid=${m.quoted.sender}&type=false`); 
                reply(mg.sudoremoved)
            }else{
            reply(mg.devoffsetting)}
        }
} catch (e) {
reply('*Error !!*')
l(e)
}
      }
cmd({
    pattern: "apply",
    react: "🔰",
    desc: "apply a date limit for user in group",
    category: "owner",
    filename: __filename,
    use: '.apply',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
          if(isGroup &&( isOwner || isItzcp)){ 
            if(config.DOWNLOADSAPI !== ''){
               
                if(!m?.quoted?.sender)  return;
                const fsghh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${from}`); 
                if(fsghh &&  (fsghh?.error || fsghh?.data?.type == 'false')) return;
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/groups/?groupjid=${m.quoted.sender}&sender=${m.quoted.sender}&datelimit=${q}`); 
            await reply(mg.datelimit)
            await conn.sendMessage(m.chat, {
                text:"@"+m.quoted.sender.split("@")[0]+ " can use this bot until "+fsh.data[0].date,
                mentions: m.quoted.sender,
            }, {
                quoted: mek,
            });
            }else{
            await reply(mg.devoffsetting)}
        } else  if(!isGroup &&( isOwner || isItzcp)){ 
            if(config.DOWNLOADSAPI !== ''){
               
                if(!m?.quoted?.sender)  return;
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/groups/?groupjid=${m.quoted.sender}&sender=${m.quoted.sender}&datelimit=${q}`); 
            await reply(mg.datelimit)
            await conn.sendMessage(m.chat, {
                text:"@"+m.quoted.sender.split("@")[0]+ " can use this bot until "+fsh.data[0].date,
                mentions: m.quoted.sender,
            }, {
                quoted: mek,
            });
            }else{
            await reply(mg.devoffsetting)}
        }
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "resetdl",
    react: "↩️",
    desc: "reset available downloads",
    category: "owner",
    filename: __filename,
    use: '.resetdl',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
          if( isOwner || isItzcp){ 
            if(config.DOWNLOADSAPI !== ''){
               
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/downloads/reset`); 
            await reply(mg.databasereset)
            process.exit(143)
            }else{
            reply(mg.devoffsetting)}
        } 
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "activate",
    react: "🛜",
    desc: "Activate a bot for the group",
    category: "owner",
    filename: __filename,
    use: '.activate',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
          if(isGroup &&( isOwner || isItzcp)){ 
            if(config.DOWNLOADSAPI !== ''){
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}?groupjid=${from}&type=true`); 
                reply(mg.activatbotingroup)
            }else{
            reply(mg.devoffsetting)}
        }
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "addsudo",
    react: "🎗️",
    desc: "Activate a bot for the user",
    category: "devoloper",
    filename: __filename,
    use: '.addsudo',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
      try{
          if(!isGroup){ 
            if(config.DOWNLOADSAPI !== ''){
                if(!m?.quoted?.sender) return;
                const fshh = await fetchJson(`${config.DOWNLOADSAPI}${bot}/${sender}`); 
                if(fshh &&  (fshh?.error || fshh?.data?.type == 'false')) return;
                const fsh = await fetchJson(`${config.DOWNLOADSAPI}${bot}?groupjid=${m.quoted.sender}&type=true`); 
                reply(mg.sudoadded)
            }else{
            reply(mg.devoffsetting)}
        }
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
pattern: "del",
react: "❌",
alias: [","],
desc: "delete message",
category: "group",
use: '.del',
filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner ||  !isAdmins) return;
try{
if (!m.quoted) return reply(mg.notextfordel);
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await conn.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('Error!!')
} 
})
cmd({
    pattern: "left", 
    react: "🚷",        
    alias: ["leave"],
    desc: "(null).",
    category: "group",
    filename: __filename,
    use: '<.>',
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner) return;
if (!m.isGroup) {
reply(mg.onlygroup)   
}
try {                
const gleave = m.chat
await conn.groupLeave(gleave)         
} catch(e) {
console.log(e);
reply('Error!!')
} 
}
)

cmd({
    pattern: "promote",
    react: "⚜️",
    desc: "Provides admin role to replied/quoted user",
    category: "group",
    filename: __filename,
    use: '<quote|reply|number>',
},
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner ||  !isAdmins )return;
         try {     if (!m.isGroup) return reply(mg.onlygroup);
    if (!isBotAdmins) return reply(mg.needbotadmins);

        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? citel.quoted.sender : q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!users) return reply(mg.nouserforpromote);
        await conn.groupParticipantsUpdate(m.chat, [users], "promote");
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const goodbye = q
        if (!goodbye) return reply('Please provide a goodbye message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

cmd({
    pattern: "setwelcome",
    desc: "Set the welcome message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')
        if (!isBotAdmins) return reply('Bot must be an admin to use this command.')
        if (!isAdmins) return reply('You must be an admin to use this command.')

        const welcome = q
        if (!welcome) return reply('Please provide a welcome message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: welcome })
        await reply('Welcome message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
