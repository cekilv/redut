let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3d6131b6a24215bad4421.jpg', m, { packname: "sticker by", author: "Cekil" })
}

handler.customPrefix = /^(Join|Grub|Riper|Memek)$/i
handler.command = new RegExp

module.exports = handler
