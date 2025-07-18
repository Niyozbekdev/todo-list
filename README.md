# 🤖 Telegram Bot

Node.js va Telegraf kutubxonasi yordamida yaratilgan Telegram bot.

## 📋 Xususiyatlari

- ✅ Oddiy buyruqlar (/start, /help, /about, va boshqalar)
- ✅ Interaktiv tugmalar
- ✅ Inline keyboard
- ✅ Vaqt ko'rsatish
- ✅ Hazil xabarlar
- ✅ Ob-havo ma'lumotlari (namuna)
- ✅ Sozlamalar menyusi
- ✅ Xatoliklarni boshqarish

## 🚀 O'rnatish

1. **Loyihani klonlash:**
   ```bash
   git clone <repository-url>
   cd telegram-bot
   ```

2. **Kutubxonalarni o'rnatish:**
   ```bash
   npm install
   ```

3. **Bot yaratish:**
   - Telegram'da [@BotFather](https://t.me/BotFather) botiga o'ting
   - `/newbot` buyrug'ini yuboring
   - Bot uchun nom va username tanlang
   - Bot tokenini oling

4. **Konfiguratsiya:**
   - `.env` faylini oching
   - `BOT_TOKEN` o'rniga o'z bot tokeningizni qo'ying:
     ```
     BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
     ```

5. **Botni ishga tushirish:**
   ```bash
   npm start
   ```

   Yoki development rejimida:
   ```bash
   npm run dev
   ```

## 🛠 Buyruqlar

| Buyruq | Tavsif |
|--------|--------|
| `/start` | Botni ishga tushirish |
| `/help` | Yordam xabari |
| `/about` | Bot haqida ma'lumot |
| `/weather` | Ob-havo ma'lumotlari |
| `/joke` | Tasodifiy hazil |
| `/time` | Joriy vaqt |
| `/settings` | Bot sozlamalari |

## 📱 Tugmalar

Bot quyidagi tugmalarni taqdim etadi:
- 🌤 Ob-havo
- 😄 Hazil
- 🕐 Vaqt
- ⚙️ Sozlamalar
- ℹ️ Yordam
- 📋 Bot haqida

## 🔧 Sozlash

### Environment Variables

`.env` faylida quyidagi o'zgaruvchilarni sozlashingiz mumkin:

```env
BOT_TOKEN=your_bot_token_here
BOT_NAME=MyTelegramBot
ADMIN_ID=your_admin_id_here
```

### Qo'shimcha xususiyatlar qo'shish

Yangi buyruqlar qo'shish uchun `bot.js` faylida:

```javascript
bot.command('yangi_buyruq', (ctx) => {
    ctx.reply('Bu yangi buyruq!');
});
```

## 📦 Kutubxonalar

- [Telegraf](https://telegraf.js.org/) - Telegram Bot API uchun
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables uchun

## 🚀 Deploy qilish

### Heroku

1. Heroku CLI o'rnating
2. Loyihani yarating:
   ```bash
   heroku create your-bot-name
   ```
3. Environment variables qo'shing:
   ```bash
   heroku config:set BOT_TOKEN=your_bot_token_here
   ```
4. Deploy qiling:
   ```bash
   git push heroku main
   ```

### VPS

1. Serverni tayyorlang
2. Node.js o'rnating
3. PM2 o'rnating:
   ```bash
   npm install -g pm2
   ```
4. Botni ishga tushiring:
   ```bash
   pm2 start bot.js --name telegram-bot
   ```

## 🐛 Xatoliklarni tuzatish

Agar bot ishlamasa:

1. Bot tokenini tekshiring
2. Internet aloqasini tekshiring
3. Console loglarini ko'ring
4. Telegraf versiyasini tekshiring

## 📄 Litsenziya

MIT License

## 👨‍💻 Muallif

Sizning ismingiz - [@your_username](https://t.me/your_username)

---

**Eslatma:** Bu bot namuna sifatida yaratilgan. Real loyihada qo'shimcha xavfsizlik va xususiyatlar qo'shishni unutmang!