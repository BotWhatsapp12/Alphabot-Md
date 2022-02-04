exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `✅ Done. Ok desu~`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname) =>{
	return`𝐇𝐚𝐢 𝐊𝐚𝐤  ${pushname} 👋 selamat ${salam} ,  𝐒𝐚𝐲𝐚 𝐖𝐢𝐛𝐮𝐁𝐨𝐭-𝐌𝐃, 𝐁𝐨𝐭 𝐢𝐧𝐢 𝐚𝐝𝐚𝐥𝐚𝐡 𝐁𝐨𝐭 𝐁𝐞𝐭𝐚 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩, 𝐉𝐢𝐤𝐚 𝐌𝐞𝐧𝐞𝐦𝐮𝐤𝐚𝐧 𝐁𝐮𝐠 𝐚𝐭𝐚𝐮 𝐊𝐞𝐬𝐚𝐥𝐚𝐡𝐚𝐧 𝐇𝐚𝐫𝐚𝐩 𝐃𝐢𝐦𝐚𝐤𝐥𝐮𝐦𝐢 𝐲𝐚, 𝐋𝐚𝐩𝐨𝐫 𝐒𝐞𝐠𝐞𝐫𝐚 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫 𝐀𝐠𝐚𝐫 𝐁𝐢𝐬𝐚 𝐃𝐢𝐩𝐞𝐫𝐛𝐚𝐢𝐤𝐢.🙏      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu WibuBot-MD :*

「 𝐵𝑜𝑡 𝐼𝑛𝑓𝑜 」 
(=) ${prefix}𝑜𝑤𝑛𝑒𝑟 
(=) ${prefix}𝑟𝑢𝑙𝑒𝑠 
(=) ${prefix}𝑠𝑐 
(=) ${prefix}𝑝𝑖𝑛𝑔 
(=) ${prefix}𝑟𝑢𝑛𝑡𝑖𝑚𝑒 
(=) ${prefix}𝑏𝑜𝑡𝑠𝑡𝑎𝑡𝑢𝑠 
(=) ${prefix}𝑑𝑜𝑛𝑎𝑡𝑒

「 𝑂𝑤𝑛𝑒𝑟 」 
(=) < 𝑒𝑣𝑎𝑙𝑢𝑎𝑡𝑒
(=) > 𝑒𝑣𝑎𝑙𝑢𝑎𝑡𝑒 
(=) $ 𝑒𝑥𝑒𝑐 
(=) => 𝑒𝑥𝑒𝑐 
(=) ${prefix}𝑠𝑒𝑡𝑚𝑒𝑛𝑢 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑠𝑒𝑡𝑚𝑒𝑛𝑢 𝑡𝑒𝑚𝑝𝑙𝑎𝑡𝑒𝐿𝑜𝑐𝑎𝑡𝑖𝑜𝑛 
(=) ${prefix}𝑠𝑒𝑡𝑚𝑒𝑛𝑢 𝑡𝑒𝑚𝑝𝑙𝑎𝑡𝑒𝑇𝑒𝑛𝑜𝑟 
(=) ${prefix}𝑠𝑒𝑛𝑑𝑠𝑒𝑠𝑖 
(=) ${prefix}𝑙𝑖𝑠𝑡𝑝𝑐 
(=) ${prefix}𝑙𝑖𝑠𝑡𝑔𝑐 
(=) ${prefix}𝑏𝑟𝑜𝑎𝑑𝑐𝑎𝑠𝑡 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑏𝑐 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑏𝑐𝑔𝑐 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑛𝑠𝑓𝑤 [𝑜𝑛/𝑜𝑓𝑓] 
(=) ${prefix}𝑎𝑛𝑡𝑖𝑣𝑖𝑒𝑤𝑜𝑛𝑐𝑒 [𝑜𝑛/𝑜𝑓𝑓] 
(=) ${prefix}𝑗𝑜𝑖𝑛 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑠𝑒𝑙𝑓 
(=) ${prefix}𝑝𝑢𝑏𝑙𝑖𝑐 [𝑜𝑛𝑙𝑦 𝑏𝑜𝑡] 
(=) ${prefix}𝑑𝑒𝑙 [𝑟𝑒𝑝𝑙𝑦 𝑝𝑒𝑠𝑎𝑛 𝑏𝑜𝑡] 
(=) ${prefix}𝑠𝑒𝑡𝑝𝑝𝑏𝑜𝑡 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒] 

「 𝐷𝑎𝑡𝑎𝑏𝑎𝑠𝑒 」 
(=) ${prefix}𝑠𝑒𝑡𝑐𝑚𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑑𝑒𝑙𝑐𝑚𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑙𝑖𝑠𝑡𝑐𝑚𝑑 
(=) ${prefix}𝑎𝑏𝑠𝑒𝑛 
(=) ${prefix}𝑐𝑒𝑘𝑎𝑏𝑠𝑒𝑛 
(=) ${prefix}𝑑𝑒𝑙𝑒𝑡𝑒𝑎𝑏𝑠𝑒𝑛 
(=) ${prefix}𝑎𝑏𝑠𝑒𝑛𝑠𝑡𝑎𝑟𝑡 
(=) ${prefix}𝑎𝑑𝑑𝑚𝑠𝑔 [𝑛𝑎𝑚𝑎 𝑓𝑖𝑙𝑒] 
(=) ${prefix}𝑔𝑒𝑡𝑚𝑠𝑔 [𝑛𝑎𝑚𝑎 𝑓𝑖𝑙𝑒] 
(=) ${prefix}𝑙𝑖𝑠𝑡𝑚𝑠𝑔 
(=) ${prefix}𝑑𝑒𝑙𝑚𝑠𝑔 [𝑛𝑎𝑚𝑎 𝑓𝑖𝑙𝑒] 

「 𝐺𝑟𝑜𝑢𝑝 」 
(=) ${prefix}𝑙𝑖𝑠𝑡𝑜𝑛𝑙𝑖𝑛𝑒 
(=) ${prefix}𝑠𝑖𝑑𝑒𝑟 
(=) ${prefix}𝑖𝑛𝑓𝑜𝑐ℎ𝑎𝑡 
(=) ${prefix}𝑠𝑒𝑡𝑑𝑒𝑠𝑘 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑠𝑒𝑡𝑝𝑝𝑔𝑟𝑢𝑝 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒] 
(=) ${prefix}𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 [𝑜𝑛/𝑜𝑓𝑓] 
(=) ${prefix}𝑟𝑒𝑣𝑜𝑘𝑒 
(=) ${prefix}𝑙𝑒𝑎𝑣𝑒 
(=) ${prefix}𝑎𝑑𝑑 [62***] 
(=) ${prefix}𝑘𝑖𝑐𝑘 @𝑡𝑎𝑔 
(=) ${prefix}𝑙𝑒𝑎𝑣𝑒 
(=) ${prefix}𝑙𝑖𝑛𝑘𝑔𝑐 
(=) ${prefix}𝑔𝑟𝑜𝑢𝑝 [𝑜𝑝𝑒𝑛/𝑐𝑙𝑜𝑠𝑒] 
(=) ${prefix}𝑡𝑎𝑔𝑎𝑙𝑙 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}ℎ𝑖𝑑𝑒𝑡𝑎𝑔 [𝑡𝑒𝑥𝑡] 

「 𝐴𝑛𝑖𝑚𝑒 」 
(=) ${prefix}𝑞𝑢𝑜𝑡𝑒𝑠𝑎𝑛𝑖𝑚𝑒 
(=) ${prefix}𝑎𝑛𝑖𝑚𝑒 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑚𝑎𝑛𝑔𝑎 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑐ℎ𝑎𝑟𝑎𝑐𝑡𝑒𝑟 [𝑞𝑢𝑒𝑟𝑦] 

「 𝑇𝑎𝑔 」 
(=) ${prefix}𝑠𝑡𝑖𝑐𝑘𝑒𝑟𝑡𝑎𝑔 
(=) ${prefix}𝑣𝑖𝑑𝑒𝑜𝑡𝑎𝑔 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑣𝑛𝑡𝑎𝑔 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑖𝑚𝑎𝑔𝑒𝑡𝑎𝑔 [𝑞𝑢𝑒𝑟𝑦] 

「 𝑆𝑡𝑎𝑙𝑘𝑖𝑛𝑔 」 
(=) ${prefix}𝑖𝑔𝑠𝑡𝑎𝑙𝑘 [𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒] 
(=) ${prefix}𝑔ℎ𝑠𝑡𝑎𝑙𝑘 [𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒] 
(=)${prefix}𝑦𝑡𝑠𝑡𝑎𝑙𝑘 [𝑐ℎ𝑎𝑛𝑛𝑒𝑙] 

「 𝑆𝑒𝑎𝑟𝑐ℎ 」 
(=) ${prefix}𝑦𝑡𝑠𝑒𝑎𝑟𝑐ℎ [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑤𝑖𝑘𝑖𝑚𝑒𝑑𝑖𝑎 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}ℎ𝑒𝑛𝑡𝑎𝑖 
(=) ${prefix}𝑤𝑎𝑡𝑡𝑝𝑎𝑑 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑤𝑒𝑏𝑡𝑜𝑜𝑛𝑠 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑑𝑟𝑎𝑘𝑜𝑟 [𝑞𝑢𝑒𝑟𝑦] 
(=)${prefix}𝑝𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡 [𝑞𝑢𝑒𝑟𝑦]

「 𝐶𝑜𝑛𝑣𝑒𝑟𝑡𝑒𝑟 」 
(=) ${prefix}𝑠𝑡𝑖𝑘𝑒𝑟 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒] 
(=) ${prefix}𝑡𝑜𝑢𝑟𝑙 [𝑖𝑚𝑎𝑔𝑒/𝑣𝑖𝑑𝑒𝑜] 
(=) ${prefix}𝑡𝑜𝑔𝑖𝑓 [𝑠𝑡𝑖𝑐𝑘𝑒𝑟] 
(=) ${prefix}𝑡𝑜𝑚𝑝4 [𝑠𝑡𝑖𝑐𝑘𝑒𝑟] 
(=)${prefix}𝑡𝑜𝑖𝑚𝑔 [𝑟𝑒𝑝𝑙𝑦 𝑠𝑡𝑖𝑐𝑘𝑒𝑟] 

「 𝐼𝑚𝑎𝑔𝑒 𝐸𝑓𝑓𝑒𝑐𝑡 」 
(=) ${prefix}𝑤𝑎𝑛𝑡𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑢𝑡𝑎𝑡𝑜𝑜 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑢𝑛𝑠ℎ𝑎𝑟𝑝𝑒𝑛 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑡ℎ𝑎𝑛𝑜𝑠 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑠𝑛𝑖𝑝𝑒𝑟 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑠ℎ𝑎𝑟𝑝𝑒𝑛 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑠𝑒𝑝𝑖𝑎 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑠𝑐𝑎𝑟𝑦 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑟𝑖𝑝 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑟𝑒𝑑𝑝𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑝𝑜𝑠𝑡𝑒𝑟𝑖𝑧𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑝𝑠4 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑝𝑖𝑥𝑒𝑙𝑖𝑧𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑚𝑖𝑠𝑠𝑖𝑜𝑛𝑝𝑎𝑠𝑠𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑚𝑜𝑢𝑠𝑡𝑎𝑐ℎ𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑙𝑜𝑜𝑘𝑤ℎ𝑎𝑡𝑘𝑎𝑟𝑒𝑛ℎ𝑎𝑣𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑗𝑎𝑖𝑙 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑖𝑛𝑣𝑒𝑟𝑡 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑟𝑒𝑦𝑠𝑐𝑎𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑐ℎ [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑎𝑦 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑓𝑟𝑎𝑚𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑓𝑖𝑟𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑑𝑖𝑠𝑡𝑜𝑟𝑡 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑑𝑖𝑐𝑡𝑎𝑡𝑜𝑟 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑑𝑒𝑒𝑝𝑓𝑟𝑦 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑑𝑑𝑢𝑛𝑔𝑒𝑜𝑛 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑐𝑖𝑟𝑐𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑐ℎ𝑎𝑙𝑙𝑒𝑛𝑔𝑒𝑟 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑢𝑟𝑛 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑟𝑎𝑧𝑧𝑒𝑟𝑠 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 

「 𝑆𝑡𝑖𝑐𝑘𝑒𝑟 𝐸𝑓𝑓𝑒𝑐𝑡 」 
(=) ${prefix}𝑗𝑎𝑖𝑙 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑟𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑎𝑦 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑙𝑜𝑜 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑙𝑢𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑠𝑒𝑝𝑖𝑎 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑟𝑒𝑒𝑛 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑖𝑛𝑣𝑒𝑟𝑡 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑙𝑢𝑟𝑝𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑙𝑢𝑟𝑝𝑙𝑒2 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑤𝑎𝑠𝑡𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑝𝑎𝑠𝑠𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑡𝑟𝑖𝑔𝑔𝑒𝑟𝑒𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑐𝑜𝑚𝑟𝑎𝑑𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑔𝑟𝑒𝑦𝑠𝑐𝑎𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑡ℎ𝑟𝑒𝑠ℎ𝑜𝑙𝑑 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=) ${prefix}𝑏𝑟𝑖𝑔ℎ𝑡𝑛𝑒𝑠𝑠 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 
(=)${prefix}𝑖𝑛𝑣𝑒𝑟𝑡𝑔𝑟𝑒𝑦𝑠𝑐𝑎𝑙𝑒 [𝑟𝑒𝑝𝑙𝑦 𝑖𝑚𝑎𝑔𝑒/𝑠𝑡𝑖𝑘𝑒𝑟] 

 「 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 」 
(=) ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑛𝑜𝑤𝑚 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑤𝑚 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑡𝑖𝑘𝑡𝑜𝑘𝑎𝑢𝑑𝑖𝑜 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑦𝑡𝑑𝑙 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑝𝑙𝑎𝑦 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑦𝑡𝑚𝑝3 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑦𝑡𝑠ℎ𝑜𝑟𝑡𝑚𝑝3 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑦𝑡𝑚𝑝4 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑦𝑡𝑠ℎ𝑜𝑟𝑡𝑠 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘𝑠𝑑 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑓𝑎𝑐𝑒𝑏𝑜𝑜𝑘ℎ𝑑 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑓𝑏𝑎𝑢𝑑𝑖𝑜 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑖𝑔𝑠𝑡𝑜𝑟𝑦 [𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒] 
(=) ${prefix}𝑖𝑔𝑑𝑙 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑖𝑔𝑝ℎ𝑜𝑡𝑜 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑖𝑔𝑣𝑖𝑑𝑒𝑜 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑖𝑔𝑟𝑒𝑒𝑙𝑠 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑖𝑔𝑡𝑣 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑠𝑜𝑢𝑛𝑑𝑐𝑙𝑜𝑢𝑑 [𝑙𝑖𝑛𝑘] 
(=) ${prefix}𝑔𝑖𝑡𝑐𝑙𝑜𝑛𝑒 [𝑙𝑖𝑛𝑘 𝑟𝑒𝑝𝑜] 
(=) ${prefix}𝑚𝑒𝑑𝑖𝑎𝑓𝑖𝑟𝑒 [𝑙𝑖𝑛𝑘] 
(=)${prefix}𝑡𝑤𝑖𝑡𝑡𝑒𝑟 𝑙𝑖𝑛𝑘 

「 𝑅𝑎𝑛𝑑𝑜𝑚 𝐴𝑛𝑖𝑚𝑒 」 
(=) ${prefix}𝑙𝑜𝑙𝑖 
(=) ${prefix}𝑛𝑒𝑘𝑜 
(=) ${prefix}𝑤𝑎𝑖𝑓𝑢 
(=) ${prefix}𝑠ℎ𝑖𝑛𝑜𝑏𝑢 
(=) ${prefix}𝑚𝑒𝑔𝑢𝑚𝑖𝑛 
(=) ${prefix}𝑏𝑢𝑙𝑙𝑦 
(=) ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒 
(=) ${prefix}𝑐𝑟𝑦 
(=) ${prefix}ℎ𝑢𝑔 
(=) ${prefix}𝑎𝑤𝑜𝑜 
(=) ${prefix}𝑘𝑖𝑠𝑠 
(=) ${prefix}𝑙𝑖𝑐𝑘 
(=) ${prefix}𝑝𝑎𝑡 
(=) ${prefix}𝑠𝑚𝑢𝑔 
(=) ${prefix}𝑏𝑜𝑛𝑘 
(=) ${prefix}𝑦𝑒𝑒𝑡 
(=) ${prefix}𝑏𝑙𝑢𝑠ℎ 
(=) ${prefix}𝑠𝑚𝑖𝑙𝑒 
(=) ${prefix}𝑤𝑎𝑣𝑒 
(=) ${prefix}ℎ𝑖𝑔ℎ𝑓𝑖𝑣𝑒 
(=) ${prefix}ℎ𝑎𝑛𝑑ℎ𝑜𝑙𝑑 
(=) ${prefix}𝑛𝑜𝑚 
(=) ${prefix}𝑏𝑖𝑡𝑒 
(=) ${prefix}𝑔𝑙𝑜𝑚𝑝 
(=) ${prefix}𝑠𝑙𝑎𝑝 
(=) ${prefix}𝑘𝑖𝑙𝑙 
(=) ${prefix}ℎ𝑎𝑝𝑝𝑦 
(=) ${prefix}𝑤𝑖𝑛𝑘 
(=) ${prefix}𝑝𝑜𝑘𝑒 
(=) ${prefix}𝑑𝑎𝑛𝑐𝑒 
(=) ${prefix}𝑐𝑟𝑖𝑛𝑔𝑒 

 「 𝑁𝑠𝑓𝑤 & 𝑆𝑓𝑤 」 
(=) ${prefix}𝑎ℎ𝑒𝑔𝑎𝑜 
(=) ${prefix}𝑎𝑠𝑠 
(=) ${prefix}𝑏𝑑𝑠𝑚 
(=) ${prefix}𝑏𝑙𝑜𝑤𝑗𝑜𝑏 
(=) ${prefix}𝑐𝑢𝑐𝑘𝑜𝑙𝑑 
(=) ${prefix}𝑐𝑢𝑚 
(=) ${prefix}𝑒𝑟𝑜 
(=) ${prefix}𝑓𝑒𝑚𝑑𝑜𝑚 
(=) ${prefix}𝑓𝑜𝑜𝑡 
(=) ${prefix}𝑔𝑎𝑛𝑔𝑏𝑎𝑛𝑔 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠𝑒𝑠 
(=) ${prefix}𝑗𝑎ℎ𝑦 
(=) ${prefix}𝑚𝑎𝑛𝑔𝑎 
(=) ${prefix}𝑚𝑎𝑠𝑡𝑢𝑟𝑏𝑎𝑡𝑖𝑜𝑛 
(=) ${prefix}𝑛𝑒𝑘𝑜 
(=) ${prefix}𝑜𝑟𝑔𝑦 
(=) ${prefix}𝑝𝑎𝑛𝑡𝑖𝑒𝑠 
(=) ${prefix}𝑝𝑢𝑠𝑠𝑦 
(=) ${prefix}𝑡𝑒𝑛𝑡𝑎𝑐𝑙𝑒𝑠 
(=) ${prefix}𝑡ℎ𝑖𝑔ℎ𝑠 
(=) ${prefix}𝑦𝑢𝑟𝑖 
(=) ${prefix}𝑓𝑒𝑒𝑡 
(=) ${prefix}𝑙𝑒𝑤𝑑𝑘𝑒𝑚𝑜 
(=) ${prefix}𝑤𝑜𝑜𝑓 
(=) ${prefix}𝑔𝑎𝑠𝑚 
(=) ${prefix}𝑠𝑜𝑙𝑜 
(=) ${prefix}8𝑏𝑎𝑙𝑙 
(=) ${prefix}𝑔𝑜𝑜𝑠𝑒 
(=) ${prefix}𝑎𝑣𝑎𝑡𝑎𝑟 
(=) ${prefix}ℎ𝑜𝑙𝑜𝑙𝑒𝑤𝑑 
(=) ${prefix}𝑔𝑒𝑐𝑔 
(=) ${prefix}ℎ𝑜𝑙𝑜 
(=) ${prefix}𝑓𝑜𝑥_𝑔𝑖𝑟𝑙 
(=) ${prefix}𝑡𝑖𝑡𝑠 
(=) ${prefix}𝑒𝑟𝑜𝑦𝑢𝑟𝑖 
(=) ${prefix}ℎ𝑜𝑙𝑜𝑦𝑒𝑟𝑜 
(=) ${prefix}𝑙𝑖𝑧𝑎𝑟𝑑 
(=) ${prefix}𝑘𝑒𝑡𝑎 
(=) ${prefix}𝑒𝑟𝑜𝑛 
(=) ${prefix}𝑒𝑟𝑜𝑘 
(=) ${prefix}𝑘𝑒𝑚𝑜𝑛𝑜𝑚𝑖𝑚𝑖 
(=) ${prefix}𝑐𝑢𝑚_𝑗𝑝𝑔 
(=) ${prefix}𝑛𝑠𝑓𝑤_𝑎𝑣𝑎𝑡𝑎𝑟 
(=) ${prefix}𝑒𝑟𝑜𝑓𝑒𝑒𝑡 
(=) ${prefix}𝑚𝑒𝑜𝑤 
(=) ${prefix}𝑤𝑎𝑙𝑙𝑝𝑎𝑝𝑒𝑟 
(=) ${prefix}𝑤𝑎𝑖𝑓𝑢 
(=) ${prefix}𝑡𝑟𝑎𝑝 
(=) ${prefix}𝑙𝑒𝑤𝑑 
(=) ${prefix}𝑝𝑢𝑠𝑠𝑦_𝑗𝑝𝑔 
(=) ${prefix}𝑓𝑢𝑡𝑎𝑛𝑎𝑟𝑖 
(=) ${prefix}𝑙𝑒𝑤𝑑𝑘 
(=) ${prefix}𝑠𝑜𝑙𝑜𝑔 
(=) ${prefix}𝑠𝑚𝑢𝑔 
(=) ${prefix}𝑐𝑢𝑚 
(=) ${prefix}𝑠𝑙𝑎𝑝 
(=) ${prefix}𝑙𝑒𝑠 
(=) ${prefix}𝑒𝑟𝑜𝑘𝑒𝑚𝑜 
(=) ${prefix}𝑏𝑗 
(=) ${prefix}𝑝𝑤𝑎𝑛𝑘𝑔 
(=) ${prefix}𝑝𝑎𝑡 
(=) ${prefix}𝑝𝑜𝑘𝑒 
(=) ${prefix}𝑓𝑒𝑒𝑑 
(=) ${prefix}𝑛𝑠𝑓𝑤_𝑛𝑒𝑘𝑜_𝑔𝑖𝑓 
(=) ${prefix}𝑝𝑢𝑠𝑠𝑦 
(=) ${prefix}𝑓𝑒𝑒𝑡𝑔 
(=) ${prefix}𝑏𝑎𝑘𝑎 
(=) ${prefix}ℎ𝑢𝑔 
(=) ${prefix}𝑘𝑖𝑠𝑠 
(=) ${prefix}𝑡𝑖𝑐𝑘𝑙𝑒 
(=) ${prefix}𝑠𝑝𝑎𝑛𝑘 
(=) ${prefix}𝑘𝑢𝑛𝑖 
(=) ${prefix}𝑐𝑙𝑎𝑠𝑠𝑖𝑐 
(=) ${prefix}𝑏𝑜𝑜𝑏𝑠 
(=) ${prefix}𝑎𝑛𝑎𝑙 
(=) ${prefix}𝑛𝑔𝑖𝑓 
(=) ${prefix}𝑐𝑢𝑑𝑑𝑙𝑒 
(=) ${prefix}𝑧𝑒𝑡𝑡𝑎𝑖 

「 𝑇𝑒𝑥𝑡𝑝𝑟𝑜 𝑀𝑒𝑛𝑢 」 
(=) ${prefix}ℎ𝑎𝑙𝑙𝑜𝑤𝑒𝑒𝑛2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}ℎ𝑜𝑟𝑟𝑜𝑟 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑔𝑎𝑚𝑒8𝑏𝑖𝑡 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑙𝑎𝑦𝑒𝑟𝑒𝑑 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑐ℎ2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑐𝑜𝑜𝑙𝑔 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑐𝑜𝑜𝑙𝑤𝑔 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑟𝑒𝑎𝑙𝑖𝑠𝑡𝑖𝑐 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑠𝑝𝑎𝑐𝑒3𝑑 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑔𝑡𝑖𝑘𝑡𝑜𝑘 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑠𝑡𝑜𝑛𝑒 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑚𝑎𝑟𝑣𝑒𝑙 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑚𝑎𝑟𝑣𝑒𝑙2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑝𝑜𝑟𝑛ℎ𝑢𝑏 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑎𝑣𝑒𝑛𝑔𝑒𝑟𝑠 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑟 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑔 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑔2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}ℎ𝑎𝑙𝑙𝑜𝑤𝑒𝑒𝑛2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑙𝑖𝑜𝑛 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑤𝑜𝑙𝑓_𝑏𝑤 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑤𝑜𝑙𝑓_𝑔 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑛𝑖𝑛𝑗𝑎 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}3𝑑𝑠𝑡𝑒𝑒𝑙 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}ℎ𝑜𝑟𝑟𝑜𝑟2 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑙𝑎𝑣𝑎 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑏𝑎𝑔𝑒𝑙 𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡2 
(=) ${prefix}𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑟𝑎𝑖𝑛𝑏𝑜𝑤2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑎𝑡𝑒𝑟_𝑝𝑖𝑝𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}ℎ𝑎𝑙𝑙𝑜𝑤𝑒𝑒𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑘𝑒𝑡𝑐ℎ 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑖𝑟𝑐𝑢𝑖𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑖𝑠𝑐𝑜𝑣𝑒𝑟𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑙𝑖𝑐2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑓𝑖𝑐𝑡𝑖𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑚𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑡𝑟𝑎𝑛𝑠𝑓𝑜𝑟𝑚𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑒𝑟𝑟𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑡ℎ𝑢𝑛𝑑𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑎𝑔𝑚𝑎 𝑡𝑒𝑥𝑡 
(=) ${prefix}3𝑑𝑠𝑡𝑜𝑛𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑐ℎ 𝑡𝑒𝑥𝑡 
(=) ${prefix}ℎ𝑎𝑟𝑟𝑦_𝑝𝑜𝑡𝑡𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑒𝑚𝑏𝑜𝑠𝑠𝑒𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑟𝑜𝑘𝑒𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑝𝑎𝑝𝑒𝑟𝑐𝑢𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑟𝑎𝑑𝑖𝑒𝑛𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑜𝑠𝑠𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑎𝑡𝑒𝑟𝑐𝑜𝑙𝑜𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑢𝑙𝑡𝑖𝑐𝑜𝑙𝑜𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛_𝑑𝑒𝑣𝑖𝑙 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑢𝑛𝑑𝑒𝑟𝑤𝑎𝑡𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑒𝑎𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑜𝑛𝑑𝑒𝑟𝑓𝑢𝑙𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐ℎ𝑟𝑖𝑠𝑡𝑚𝑎𝑠 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛_𝑙𝑖𝑔ℎ𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑛𝑜𝑤 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐𝑙𝑜𝑢𝑑𝑠𝑘𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑙𝑢𝑥𝑢𝑟𝑦2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑟𝑎𝑑𝑖𝑒𝑛𝑡2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑢𝑚𝑚𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑟𝑖𝑡𝑖𝑛𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑒𝑛𝑔𝑟𝑎𝑣𝑒𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑢𝑚𝑚𝑒𝑟𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}3𝑑𝑔𝑙𝑢𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑑𝑎𝑟𝑘 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛𝑙𝑖𝑔ℎ𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑜𝑠𝑐𝑎𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑖𝑛𝑖𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}ℎ𝑜𝑙𝑜𝑔𝑟𝑎𝑝ℎ𝑖𝑐 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑝𝑢𝑟𝑝𝑙𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑜𝑠𝑠𝑦𝑏 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑙𝑢𝑥𝑒2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑜𝑠𝑠𝑦𝑐 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑓𝑎𝑏𝑟𝑖𝑐 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛𝑐 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑤𝑦𝑒𝑎𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑤𝑦𝑒𝑎𝑟2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑠 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑥𝑚𝑎𝑠 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑙𝑜𝑜𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑎𝑟𝑘𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑜𝑘𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑖𝑐𝑘𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑎𝑡𝑢𝑟𝑎𝑙 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑓𝑖𝑟𝑒𝑤𝑜𝑟𝑘 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑘𝑒𝑙𝑒𝑡𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛3 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛4 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛5 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛6 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑎𝑙𝑙𝑜𝑜𝑛7 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑡𝑒𝑒𝑙 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑜𝑠𝑠 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑛𝑖𝑚 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑐𝑜𝑟𝑎𝑡𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑐𝑜𝑟𝑎𝑡𝑒2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑝𝑒𝑟𝑖𝑑𝑜𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑟𝑜𝑐𝑘 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠3 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠4 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠5 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠6 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠7 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑎𝑠𝑠8 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐𝑎𝑝𝑡𝑎𝑖𝑛_𝑎𝑠2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑟𝑜𝑏𝑜𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑒𝑞𝑢𝑎𝑙𝑖𝑧𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑡𝑜𝑥𝑖𝑐 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔3 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔4 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔5 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔6 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔7 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑒𝑐𝑜𝑟𝑎𝑡𝑖𝑣𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐ℎ𝑜𝑐𝑜𝑙𝑎𝑡𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑡𝑟𝑎𝑤𝑏𝑒𝑟𝑟𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑘𝑜𝑖𝑓𝑖𝑠ℎ 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑟𝑒𝑎𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑎𝑡𝑟𝑖𝑥 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑙𝑜𝑜𝑑2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛𝑙𝑖𝑔𝑡ℎ2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑡ℎ𝑢𝑛𝑑𝑒𝑟2 𝑡𝑒𝑥𝑡 
(=) ${prefix}3𝑑𝑏𝑜𝑥 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑛𝑒𝑜𝑛2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑟𝑜𝑎𝑑𝑤 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑜𝑘𝑒ℎ 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑛𝑒𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑎𝑑𝑣𝑎𝑛𝑐𝑒𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑟𝑜𝑝𝑤𝑎𝑡𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑎𝑙𝑙 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐ℎ𝑟𝑖𝑠𝑚𝑎𝑠𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}ℎ𝑜𝑛𝑒𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑑𝑟𝑢𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑎𝑟𝑏𝑙𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑎𝑟𝑏𝑙𝑒2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑖𝑐𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑢𝑖𝑐𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑟𝑢𝑠𝑡𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑎𝑏𝑠𝑡𝑟𝑎 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑏𝑖𝑠𝑐𝑢𝑖𝑡 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑤𝑜𝑜𝑑 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠𝑐𝑖𝑓𝑖 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑝𝑢𝑟𝑝𝑙𝑒𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑠ℎ𝑖𝑛𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦3 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦4 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦5 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦6 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦7 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑗𝑒𝑤𝑒𝑙𝑟𝑦8 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙ℎ 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑜𝑙𝑑𝑒𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟3 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟4 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟5 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟6 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑙𝑖𝑡𝑡𝑒𝑟7 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐𝑎𝑟𝑏𝑜𝑛 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑐𝑎𝑛𝑑𝑦 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑏 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑔𝑒𝑚𝑏 𝑡𝑒𝑥𝑡 
(=) ${prefix}3𝑑𝑐ℎ𝑟𝑜𝑚𝑒 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑏2 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑔 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑚𝑒𝑡𝑎𝑙𝑔 𝑡𝑒𝑥𝑡 

「 𝑂𝑡ℎ𝑒𝑟𝑠 」 
(=) ${prefix}𝑎𝑓𝑘 [𝑟𝑒𝑎𝑠𝑜𝑛] 
(=) ${prefix}𝑡𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑒 𝑘𝑜𝑑𝑒_𝑏𝑎ℎ𝑎𝑠𝑎 𝑡𝑒𝑥𝑡 
(=) ${prefix}𝑘𝑎𝑙𝑘𝑢𝑙𝑎𝑡𝑜𝑟 [𝑞𝑢𝑒𝑟𝑦] 
(=) ${prefix}𝑠𝑚𝑒𝑚𝑒 [𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑠𝑚𝑒𝑚𝑒2 [𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡] 
(=) ${prefix}𝑚𝑒𝑚𝑒𝑔𝑒𝑛 [𝑡𝑒𝑥𝑡|𝑡𝑒𝑥𝑡] 

 「 𝑇𝑞𝑇𝑜 」 
(=) 𝑀𝑦 𝐺𝑜𝑑 
(=) 𝑀𝑦 𝑃𝑎𝑟𝑒𝑛𝑡𝑠 
(=) 𝐹𝑎𝑡𝑖ℎ 𝐴. 
(=) 𝐹𝑒𝑟𝑑𝑖 
(=) 𝐷𝑖𝑘𝑎𝐴𝑟𝑑𝑛𝑡 
(=) 𝑀ℎ𝑎𝑛𝑘𝑏𝑎𝑟𝑏𝑎𝑟 
(=) 𝑁𝑢𝑟𝑢𝑡𝑜𝑚𝑜 
(=) 𝑅𝑎𝑠ℎ𝑖𝑑 
(=) 𝑍𝑒𝑒𝑜𝑛𝑒𝑂𝑓𝑐 
(=) 𝑃𝑒𝑛𝑦𝑒𝑑𝑖𝑎 𝑀𝑜𝑑𝑢𝑙𝑒 
(=) 𝐴𝑛𝑑 𝐴𝑙𝑙 𝑆𝑢𝑝𝑝𝑜𝑟𝑡
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
├ 𝖴𝗆𝗎𝗋 :
├ 𝖦𝖾𝗇𝖽𝖾𝗋 :
├ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zeeoneofc/Alphabot-Md
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}sc
├ ${prefix}ping
├ ${prefix}runtime
├ ${prefix}botstatus
╰❒ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}setmenu [query]
├ ${prefix}setmenu templateLocation
├ ${prefix}setmenu templateTenor
├ ${prefix}sendsesi
├ ${prefix}listpc
├ ${prefix}listgc
├ ${prefix}broadcast [text]
├ ${prefix}bc [text]
├ ${prefix}bcgc [text]
├ ${prefix}nsfw [on/off]
├ ${prefix}antiviewonce [on/off]
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
├ ${prefix}setcmd [reply stiker]
├ ${prefix}delcmd [reply stiker]
├ ${prefix}listcmd
├ ${prefix}absen
├ ${prefix}cekabsen
├ ${prefix}deleteabsen
├ ${prefix}absenstart
├ ${prefix}addmsg [nama file]
├ ${prefix}getmsg [nama file]
├ ${prefix}listmsg
╰❒ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
├ ${prefix}listonline
├ ${prefix}sider
├ ${prefix}infochat
├ ${prefix}setdesk [text]
├ ${prefix}setppgrup [reply image]
├ ${prefix}antilink [on/off]
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [62***]
├ ${prefix}kick @tag
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
├ ${prefix}quotesanime
├ ${prefix}anime [query]
├ ${prefix}manga [query]
╰❒ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
├ ${prefix}stickertag
├ ${prefix}videotag [query]
├ ${prefix}vntag [query]
╰❒ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
├ ${prefix}igstalk [username]
├ ${prefix}ghstalk [username]
╰❒ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
├ ${prefix}ytsearch [query]
├ ${prefix}wallpaper [query]
├ ${prefix}wikimedia [query]
├ ${prefix}hentai
├ ${prefix}wattpad [query]
├ ${prefix}webtoons [query]
├ ${prefix}drakor [query]
╰❒ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
├ ${prefix}stiker [reply image]
├ ${prefix}tourl [image/video]
├ ${prefix}togif [sticker]
├ ${prefix}tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
├ ${prefix}wanted [reply image/stiker]
├ ${prefix}utatoo [reply image/stiker]
├ ${prefix}unsharpen [reply image/stiker]
├ ${prefix}thanos [reply image/stiker]
├ ${prefix}sniper [reply image/stiker]
├ ${prefix}sharpen [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}scary [reply image/stiker]
├ ${prefix}rip [reply image/stiker]
├ ${prefix}redple [reply image/stiker]
├ ${prefix}rejected [reply image/stiker]
├ ${prefix}posterize [reply image/stiker]
├ ${prefix}ps4 [reply image/stiker]
├ ${prefix}pixelize [reply image/stiker]
├ ${prefix}missionpassed [reply image/stiker]
├ ${prefix}moustache [reply image/stiker]
├ ${prefix}lookwhatkarenhave [reply image/stiker]
├ ${prefix}jail [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}instagram [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}glitch [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}frame [reply image/stiker]
├ ${prefix}fire [reply image/stiker]
├ ${prefix}distort [reply image/stiker]
├ ${prefix}dictator [reply image/stiker]
├ ${prefix}deepfry [reply image/stiker]
├ ${prefix}ddungeon [reply image/stiker]
├ ${prefix}circle [reply image/stiker]
├ ${prefix}challenger [reply image/stiker]
├ ${prefix}burn [reply image/stiker]
├ ${prefix}brazzers [reply image/stiker]
╰❒ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
├ ${prefix}jail [reply image/stiker]
├ ${prefix}red [reply image/stiker]
├ ${prefix}gay [reply image/stiker]
├ ${prefix}bloo [reply image/stiker]
├ ${prefix}blue [reply image/stiker]
├ ${prefix}sepia [reply image/stiker]
├ ${prefix}green [reply image/stiker]
├ ${prefix}glass [reply image/stiker]
├ ${prefix}invert [reply image/stiker]
├ ${prefix}blurple [reply image/stiker]
├ ${prefix}blurple2 [reply image/stiker]
├ ${prefix}wasted [reply image/stiker]
├ ${prefix}passed [reply image/stiker]
├ ${prefix}triggered [reply image/stiker]
├ ${prefix}comrade [reply image/stiker]
├ ${prefix}greyscale [reply image/stiker]
├ ${prefix}threshold [reply image/stiker]
├ ${prefix}brightness [reply image/stiker]
╰❒ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [query]
├ ${prefix}ytmp3 [link]
├ ${prefix}ytshortmp3 [link]
├ ${prefix}ytmp4 [link]
├ ${prefix}ytshorts [link]
├ ${prefix}facebook [link]
├ ${prefix}facebooksd [link]
├ ${prefix}facebookhd [link]
├ ${prefix}fbaudio [link]
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
├ ${prefix}soundcloud [link]
├ ${prefix}gitclone [link repo]
├ ${prefix}mediafire [link]
╰❒ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
├ ${prefix}ahegao
├ ${prefix}ass
├ ${prefix}bdsm
├ ${prefix}blowjob
├ ${prefix}cuckold
├ ${prefix}cum
├ ${prefix}ero
├ ${prefix}femdom
├ ${prefix}foot
├ ${prefix}gangbang
├ ${prefix}glasses
├ ${prefix}jahy
├ ${prefix}manga
├ ${prefix}masturbation
├ ${prefix}neko
├ ${prefix}orgy
├ ${prefix}panties
├ ${prefix}pussy
├ ${prefix}tentacles
├ ${prefix}thighs
├ ${prefix}yuri
├ ${prefix}feet
├ ${prefix}lewdkemo
├ ${prefix}woof
├ ${prefix}gasm
├ ${prefix}solo
├ ${prefix}8ball
├ ${prefix}goose
├ ${prefix}avatar
├ ${prefix}hololewd
├ ${prefix}gecg
├ ${prefix}holo
├ ${prefix}fox_girl
├ ${prefix}tits
├ ${prefix}eroyuri
├ ${prefix}holoyero
├ ${prefix}lizard
├ ${prefix}keta
├ ${prefix}eron
├ ${prefix}erok
├ ${prefix}kemonomimi
├ ${prefix}cum_jpg
├ ${prefix}nsfw_avatar
├ ${prefix}erofeet
├ ${prefix}meow
├ ${prefix}wallpaper
├ ${prefix}waifu
├ ${prefix}trap
├ ${prefix}lewd
├ ${prefix}pussy_jpg
├ ${prefix}futanari
├ ${prefix}lewdk
├ ${prefix}solog
├ ${prefix}smug
├ ${prefix}cum
├ ${prefix}slap
├ ${prefix}les
├ ${prefix}erokemo
├ ${prefix}bj
├ ${prefix}pwankg
├ ${prefix}pat
├ ${prefix}poke
├ ${prefix}feed
├ ${prefix}nsfw_neko_gif
├ ${prefix}pussy
├ ${prefix}feetg
├ ${prefix}baka
├ ${prefix}hug
├ ${prefix}kiss
├ ${prefix}tickle
├ ${prefix}spank
├ ${prefix}kuni
├ ${prefix}classic
├ ${prefix}boobs
├ ${prefix}anal
├ ${prefix}ngif
├ ${prefix}cuddle
╰❒ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
├ ${prefix}halloween2 text|text2
├ ${prefix}horror text|text2
├ ${prefix}game8bit text|text2
├ ${prefix}layered text|text2
├ ${prefix}glitch2 text|text2
├ ${prefix}coolg text|text2
├ ${prefix}coolwg text|text2
├ ${prefix}realistic text|text2
├ ${prefix}space3d text|text2
├ ${prefix}gtiktok text|text2
├ ${prefix}stone text|text2
├ ${prefix}marvel text|text2
├ ${prefix}marvel2 text|text2
├ ${prefix}pornhub text|text2
├ ${prefix}avengers text|text2
├ ${prefix}metalr text|text2
├ ${prefix}metalg text|text2
├ ${prefix}metalg2 text|text2
├ ${prefix}halloween2 text|text2
├ ${prefix}lion text|text2
├ ${prefix}wolf_bw text|text2
├ ${prefix}wolf_g text|text2
├ ${prefix}ninja text|text2
├ ${prefix}3dsteel text|text2
├ ${prefix}horror2 text|text2
├ ${prefix}lava text|text2
├ ${prefix}bagel text|text2
├ ${prefix}blackpink text
├ ${prefix}rainbow2 text
├ ${prefix}water_pipe text
├ ${prefix}halloween text
├ ${prefix}sketch text
├ ${prefix}sircuit text
├ ${prefix}discovery text
├ ${prefix}metallic2 text
├ ${prefix}fiction text
├ ${prefix}demon text
├ ${prefix}transformer text
├ ${prefix}berry text
├ ${prefix}thunder text
├ ${prefix}magma text
├ ${prefix}3dstone text
├ ${prefix}neon text
├ ${prefix}glitch text
├ ${prefix}harry_potter text
├ ${prefix}embossed text
├ ${prefix}broken text
├ ${prefix}papercut text
├ ${prefix}gradient text
├ ${prefix}glossy text
├ ${prefix}watercolor text
├ ${prefix}multicolor text
├ ${prefix}neon_devil text
├ ${prefix}underwater text
├ ${prefix}bear text
├ ${prefix}wonderfulg text
├ ${prefix}christmas text
├ ${prefix}neon_light text
├ ${prefix}snow text
├ ${prefix}cloudsky text
├ ${prefix}luxury2 text
├ ${prefix}gradient2 text
├ ${prefix}summer text
├ ${prefix}writing text
├ ${prefix}engraved text
├ ${prefix}summery text
├ ${prefix}3dglue text
├ ${prefix}metaldark text
├ ${prefix}neonlight text
├ ${prefix}oscar text
├ ${prefix}minion text
├ ${prefix}holographic text
├ ${prefix}purple text
├ ${prefix}glossyb text
├ ${prefix}deluxe2 text
├ ${prefix}glossyc text
├ ${prefix}fabric text
├ ${prefix}neonc text
├ ${prefix}newyear text
├ ${prefix}newyear2 text
├ ${prefix}metals text
├ ${prefix}xmas text
├ ${prefix}blood text
├ ${prefix}darkg text
├ ${prefix}joker text
├ ${prefix}wicker text
├ ${prefix}natural text
├ ${prefix}firework text
├ ${prefix}skeleton text
├ ${prefix}balloon text
├ ${prefix}balloon2 text
├ ${prefix}balloon3 text
├ ${prefix}balloon4 text
├ ${prefix}balloon5 text
├ ${prefix}balloon6 text
├ ${prefix}balloon7 text
├ ${prefix}steel text
├ ${prefix}gloss text
├ ${prefix}denim text
├ ${prefix}decorate text
├ ${prefix}decorate2 text
├ ${prefix}peridot text
├ ${prefix}rock text
├ ${prefix}glass text
├ ${prefix}glass2 text
├ ${prefix}glass3 text
├ ${prefix}glass4 text
├ ${prefix}glass5 text
├ ${prefix}glass6 text
├ ${prefix}glass7 text
├ ${prefix}glass8 text
├ ${prefix}captain_as2 text
├ ${prefix}robot text
├ ${prefix}equalizer text
├ ${prefix}toxic text
├ ${prefix}sparkling text
├ ${prefix}sparkling2 text
├ ${prefix}sparkling3 text
├ ${prefix}sparkling4 text
├ ${prefix}sparkling5 text
├ ${prefix}sparkling6 text
├ ${prefix}sparkling7 text
├ ${prefix}decorative text
├ ${prefix}chocolate text
├ ${prefix}strawberry text
├ ${prefix}koifish text
├ ${prefix}bread text
├ ${prefix}matrix text
├ ${prefix}blood2 text
├ ${prefix}neonligth2 text
├ ${prefix}thunder2 text
├ ${prefix}3dbox text
├ ${prefix}neon2 text
├ ${prefix}roadw text
├ ${prefix}bokeh text
├ ${prefix}gneon text
├ ${prefix}advanced text
├ ${prefix}dropwater text
├ ${prefix}wall text
├ ${prefix}chrismast text
├ ${prefix}honey text
├ ${prefix}drug text
├ ${prefix}marble text
├ ${prefix}marble2 text
├ ${prefix}ice text
├ ${prefix}juice text
├ ${prefix}rusty text
├ ${prefix}abstra text
├ ${prefix}biscuit text
├ ${prefix}wood text
├ ${prefix}scifi text
├ ${prefix}metalr text
├ ${prefix}purpleg text
├ ${prefix}shiny text 
├ ${prefix}jewelry text
├ ${prefix}jewelry2 text
├ ${prefix}jewelry3 text
├ ${prefix}jewelry4 text
├ ${prefix}jewelry5 text
├ ${prefix}jewelry6 text
├ ${prefix}jewelry7 text
├ ${prefix}jewelry8 text
├ ${prefix}metalh text
├ ${prefix}golden text
├ ${prefix}glitter text
├ ${prefix}glitter2 text
├ ${prefix}glitter3 text
├ ${prefix}glitter4 text
├ ${prefix}glitter5 text
├ ${prefix}glitter6 text
├ ${prefix}glitter7 text
├ ${prefix}metale text
├ ${prefix}carbon text
├ ${prefix}candy text
├ ${prefix}metalb text
├ ${prefix}gemb text
├ ${prefix}3dchrome text
├ ${prefix}metalb2 text
├ ${prefix}metalg text
╰❒ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
├ ${prefix}ttp [text]
├ ${prefix}attp [text]
├ ${prefix}afk [reason]
├ ${prefix}translate kode_bahasa text
├ ${prefix}kalkulator [query]
├ ${prefix}smeme [text]
├ ${prefix}smeme2 [text|text]
╰❒ ${prefix}memegen [text|text]
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support
`
}