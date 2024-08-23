export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`> "💖 𝙷𝚘𝚕𝚊 @${m.sender.split`@`[0]}, 𝚍𝚒𝚜𝚌𝚞𝚕𝚙𝚊 𝚙𝚎𝚛𝚘 𝚗𝚘 𝚎𝚜𝚝𝚊 💌𝚙𝚎𝚛𝚖𝚒𝚝𝚒𝚍𝚘 𝚑𝚊𝚋𝚕𝚊𝚛𝚖𝚎 𝚙𝚘𝚛 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 💔𝚙𝚘𝚛 𝚕𝚘 𝚚𝚞𝚎 𝚜𝚎𝚛𝚊𝚜 𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘\n\n> *💞𝙿𝚞𝚎𝚍𝚎𝚜 𝚞𝚗𝚒𝚛𝚝𝚎 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎 𝚕𝚊 𝚋𝚘𝚝 𝚗𝚊𝚔𝚊𝚗𝚘 𝚊𝚚𝚞𝚒* 👇\n\n\n${gp1}`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
