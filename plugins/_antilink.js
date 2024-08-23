let linkRegex = /(https?:\/\/(?:www\.)?(?:t\.me|telegram\.me|whatsapp\.com)\/\S+)|(https?:\/\/chat\.whatsapp\.com\/\S+)|(https?:\/\/whatsapp\.com\/channel\/\S+)/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `🏷 *𝖔𝖞𝖊𝖊!! 𝖊𝖑 𝖆𝖓𝖙𝖎 𝖑𝖎𝖓𝖐 𝖊𝖘𝖙𝖆 𝖆𝖈𝖙𝖎𝖛𝖔 𝖊𝖓 𝖊𝖘𝖙𝖊 𝖌𝖗𝖚𝖕𝖔 𝖕𝖊𝖗𝖔 𝖈𝖔𝖒𝖔 𝖊𝖗𝖊𝖘 𝖆𝖉𝖒𝖎𝖓 𝖓𝖔 𝖙𝖊 𝖕𝖚𝖊𝖉𝖔 𝖊𝖑𝖎𝖒𝖎𝖓𝖆𝖗, ¡𝖊𝖘𝖔 𝖊𝖘 𝖏𝖚𝖌𝖆𝖗 𝖘𝖚𝖈𝖎𝖔 𝖕𝖔𝖗 𝖍𝖔𝖞 𝖙𝖊 𝖘𝖆𝖑𝖛𝖆𝖘!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `📎 *¡𝕰𝖓𝖑𝖆𝖈𝖊 𝖉𝖊𝖙𝖊𝖈𝖙𝖆𝖉𝖔!*\n\n*${await this.getName(m.sender)} 𝕷𝖔𝖘𝖎𝖊𝖓𝖙𝖔 𝖕𝖊𝖗𝖔 𝖒𝖆𝖓𝖉𝖆𝖘𝖙𝖊 𝖚𝖓 𝖊𝖓𝖑𝖆𝖈𝖊 𝖉𝖊 𝖔𝖙𝖗𝖔 𝖌𝖗𝖚𝖕𝖔 𝖞 𝖊𝖘𝖔 𝖓𝖔 𝖊𝖘𝖙𝖆 𝖕𝖊𝖗𝖒𝖎𝖙𝖚𝖉𝖔 𝖕𝖔𝖗 𝖑𝖔 𝖈𝖚𝖆𝖑 𝖙𝖊 𝖙𝖊𝖓𝖉𝖗𝖊𝖒𝖔𝖘 𝖖𝖚𝖊 𝖘𝖆𝖈𝖆𝖗 𝖉𝖊𝖑 𝖌𝖗𝖚𝖕𝖔*`, m, rcanal, )
if (!isBotAdmin) return conn.reply(m.chat, `🌼 *𝕯𝖎𝖘𝖈𝖚𝖑𝖕𝖆 𝖕𝖊𝖗𝖔 𝖓𝖔 𝖕𝖚𝖊𝖉𝖔 𝖊𝖑𝖎𝖒𝖎𝖓𝖆𝖗 𝖆𝖑 𝖎𝖓𝖙𝖗𝖚𝖘𝖔 𝖕𝖔𝖗 𝖖𝖚𝖊 𝖓𝖔 𝖘𝖔𝖞 𝖆𝖉𝖒𝖎𝖓 𝖊𝖓 𝖊𝖘𝖙𝖊 𝖌𝖗𝖚𝖕𝖔*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*¡Esta característica esta desactivada!*`, m, rcanal, )
}
return !0

}
