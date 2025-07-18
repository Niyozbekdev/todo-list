const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

// Bot tokenini .env fayldan olish
const bot = new Telegraf(process.env.BOT_TOKEN);

// Bot ishga tushganda
bot.start((ctx) => {
    const welcomeMessage = `
🤖 Salom, ${ctx.from.first_name}!

Men sizning yangi Telegram botingizman! 

Quyidagi buyruqlardan foydalanishingiz mumkin:
/help - Yordam
/about - Bot haqida
/weather - Ob-havo
/joke - Hazil
/time - Vaqt
/settings - Sozlamalar
    `;
    
    ctx.reply(welcomeMessage, Markup.keyboard([
        ['🌤 Ob-havo', '😄 Hazil'],
        ['🕐 Vaqt', '⚙️ Sozlamalar'],
        ['ℹ️ Yordam', '📋 Bot haqida']
    ]).resize());
});

// Yordam buyrug'i
bot.help((ctx) => {
    const helpMessage = `
📋 Bot buyruqlari:

/start - Botni ishga tushirish
/help - Bu yordam xabari
/about - Bot haqida ma'lumot
/weather - Ob-havo ma'lumotlari
/joke - Tasodifiy hazil
/time - Joriy vaqt
/settings - Bot sozlamalari

🔘 Tugmalar orqali ham foydalanishingiz mumkin!
    `;
    ctx.reply(helpMessage);
});

// Bot haqida
bot.command('about', (ctx) => {
    const aboutMessage = `
🤖 Bot haqida:

📱 Nom: ${process.env.BOT_NAME || 'Telegram Bot'}
⚡ Versiya: 1.0.0
🛠 Texnologiya: Node.js + Telegraf
👨‍💻 Yaratuvchi: @your_username

Bu bot Node.js va Telegraf kutubxonasi yordamida yaratilgan.
    `;
    ctx.reply(aboutMessage);
});

// Ob-havo buyrug'i
bot.command('weather', (ctx) => {
    ctx.reply('🌤 Ob-havo: Bugun quyoshli, harorat +25°C\n(Bu namuna ma'lumot, real API ulanishi kerak)');
});

// Hazil buyrug'i
bot.command('joke', (ctx) => {
    const jokes = [
        "Nima uchun dasturchilar qorong'ulikni yaxshi ko'radilar? Chunki yorug'lik bug keladi! 💡",
        "Dasturchi xotiniga: 'Seni sevaman!' dedi. Xotini: 'Boolean qaytaring!' dedi. 😄",
        "Nima uchun Java dasturchilar ko'zoynak taqadilar? Chunki ular C# ko'ra olmaydilar! 👓",
        "404 - Hazil topilmadi! 😅",
        "Dasturchi bolasi yig'layotgan edi. Onasi: 'Nega yig'layapsan?' dedi. Bola: 'Null pointer exception!' 😭"
    ];
    
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    ctx.reply(randomJoke);
});

// Vaqt buyrug'i
bot.command('time', (ctx) => {
    const now = new Date();
    const timeString = now.toLocaleString('uz-UZ', {
        timeZone: 'Asia/Tashkent',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    ctx.reply(`🕐 Joriy vaqt: ${timeString}`);
});

// Sozlamalar
bot.command('settings', (ctx) => {
    const settingsKeyboard = Markup.inlineKeyboard([
        [Markup.button.callback('🔊 Ovoz', 'sound_toggle')],
        [Markup.button.callback('🌐 Til', 'language')],
        [Markup.button.callback('🔔 Bildirishnomalar', 'notifications')]
    ]);
    
    ctx.reply('⚙️ Bot sozlamalari:', settingsKeyboard);
});

// Inline tugmalar uchun callback
bot.action('sound_toggle', (ctx) => {
    ctx.answerCbQuery('🔊 Ovoz sozlamalari o\'zgartirildi!');
    ctx.editMessageText('🔊 Ovoz: Yoqilgan ✅');
});

bot.action('language', (ctx) => {
    ctx.answerCbQuery('🌐 Til sozlamalari');
    ctx.editMessageText('🌐 Til: O\'zbek tili ✅');
});

bot.action('notifications', (ctx) => {
    ctx.answerCbQuery('🔔 Bildirishnomalar sozlamalari');
    ctx.editMessageText('🔔 Bildirishnomalar: Yoqilgan ✅');
});

// Tugmalar orqali xabarlar
bot.hears('🌤 Ob-havo', (ctx) => {
    ctx.reply('🌤 Bugun ob-havo: Quyoshli, +25°C\n💨 Shamol: 5 m/s\n💧 Namlik: 60%');
});

bot.hears('😄 Hazil', (ctx) => {
    bot.handleUpdate({ ...ctx.update, message: { ...ctx.message, text: '/joke' } });
});

bot.hears('🕐 Vaqt', (ctx) => {
    bot.handleUpdate({ ...ctx.update, message: { ...ctx.message, text: '/time' } });
});

bot.hears('⚙️ Sozlamalar', (ctx) => {
    bot.handleUpdate({ ...ctx.update, message: { ...ctx.message, text: '/settings' } });
});

bot.hears('ℹ️ Yordam', (ctx) => {
    bot.handleUpdate({ ...ctx.update, message: { ...ctx.message, text: '/help' } });
});

bot.hears('📋 Bot haqida', (ctx) => {
    bot.handleUpdate({ ...ctx.update, message: { ...ctx.message, text: '/about' } });
});

// Noma'lum xabarlar uchun
bot.on('text', (ctx) => {
    const responses = [
        "Kechirasiz, bu buyruqni tushunmadim. /help buyrug'ini kiriting.",
        "Bu buyruq mavjud emas. Yordam uchun /help ni bosing.",
        "Noma'lum buyruq. Mavjud buyruqlar ro'yxati uchun /help"
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    ctx.reply(randomResponse);
});

// Xatoliklarni ushlash
bot.catch((err, ctx) => {
    console.error('Bot xatolik:', err);
    ctx.reply('Kechirasiz, xatolik yuz berdi. Keyinroq urinib ko\'ring.');
});

// Botni ishga tushirish
bot.launch()
    .then(() => {
        console.log('🤖 Bot muvaffaqiyatli ishga tushdi!');
        console.log('Bot nomi:', process.env.BOT_NAME || 'Telegram Bot');
    })
    .catch((err) => {
        console.error('Bot ishga tushmadi:', err);
    });

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));