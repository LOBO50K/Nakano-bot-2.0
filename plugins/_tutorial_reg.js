let handler = async (m, { conn }) => {
  const usuario = m.pushName || 'Usuario';
  const videoUrl = 'https://telegra.ph/file/330a7838421e8f555b7be.mp4';

  const texto = `Hola @${m.sender.split('@')[0]} 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝚃𝙴 𝙿𝚄𝙴𝙳𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰 𝙴𝙽 𝙻𝙰 𝙱𝙾𝚃 𝙽𝙰𝙺𝙰𝙽𝙾, 𝙴𝚂𝙿𝙴𝚁𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝚃𝙴 𝚂𝙸𝚁𝚅𝙰💞💖.`;

  const options = {
    quoted: m,
    caption: texto,
    mentions: [m.sender]
  };

  await conn.sendMessage(m.chat, { video: { url: videoUrl }, ...options });
};

handler.command = ['tutorial']

export default handler;
