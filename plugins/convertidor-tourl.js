import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '💌 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙽𝙾 𝙷𝙰𝚁𝙸𝙰𝚂 𝙴𝙻 𝙵𝙰𝚅𝙾𝚁 𝙳𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙿𝙰𝚂𝙰𝚁𝚃𝙴 𝚃𝚄 𝙻𝙸𝙽𝙺.', m, rcanal)
  await m.react(rwait)
  try {
  conn.reply(m.chat, global.wait, m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
  title: packname,
  body: wm,
  previewType: 0, thumbnail: icons,
  sourceUrl: channel }}})
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()
  let txt = `乂  *𝕷 𝖎 𝖓 𝖐 ⋰∴⋱ 𝕰 𝖓 𝖑 𝖆 𝖈 𝖊*  乂\n\n`
      txt += `*» 𝕰𝖓𝖑𝖆𝖈𝖊* : ${link}\n`
      txt += `*» 𝕬𝖈𝖔𝖗𝖙𝖆𝖉𝖔* : ${await shortUrl(link)}\n`
      txt += `*» 𝕿𝖆𝖒𝖆𝖓̃𝖔* : ${formatBytes(media.length)}\n`
      txt += `*» 𝕰𝖝𝖕𝖎𝖗𝖆𝖈𝖎𝖔𝖓* : ${isTele ? '𝖓𝖔 𝖊𝖝𝖕𝖎𝖗𝖆' : '𝖉𝖊𝖘𝖈𝖔𝖓𝖔𝖈𝖎𝖉𝖔'}\n\n`
      txt += `> *${dev}*`

await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, fkontak, rcanal)
await m.react(done)
} catch {
await m.react(error)
}}
handler.help = ['tourl']
handler.tags = ['transformador']
handler.register = true
handler.command = ['tourl','upload']
export default handler

function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
}
