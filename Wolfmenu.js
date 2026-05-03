let handler = async (m, { conn }) => {
let menu = `
╭───「 KNIGHTWOLF MD 」
│  Owner: Prosper Walker 🇺🇬
│  Prefix: .
│  Hybrid: Knight + Wolf
╰────────────────
`.trim()
conn.reply(m.chat, menu, m)
}
handler.help = ['wolfmenu']
handler.tags = ['main']
handler.command = ['wolfmenu', 'wmenu'] 
export default handler.
