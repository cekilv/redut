/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya? 

Sc Ini Private Ya Banh
   _SEWA BOT_
1 bulan = 10.000
2 Minggu 7.000
1 Minggu 5.000
RUN BOT RDP 24 JAM READY JG BANH
KLIK BUTTON DI BAWAH
conn.sendBut(m.chat, esce, wm3, 'Owner', '.owner', m) 
}
handler.help = ['sc', 'sewa']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
