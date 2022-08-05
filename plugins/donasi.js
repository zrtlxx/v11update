let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-2308-4340]
│ •  [0812-2308-4340]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
