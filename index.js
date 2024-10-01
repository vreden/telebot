const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

const token = '7729089620:AAFzQeVn9wO_whuc4cB6TeOl0unEmJmT5ag';
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());

app.get('/send', (req, res) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ Error: 'ID tidak disediakan.'});
    }

const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Chat Bot',
                        url: `https://wa.me/${id}`
                    }
                ]
            ]
        }
    };
const data = ["62"]
    bot.sendMessage(7089319504, 'TERHUBUNG 🚀\n\nBerhasil Terhubung Gan\nKlik Opsi Button Cek:\n', options)
        .then(() => {
            res.status(200).json({
      status: 200,
      creator: "Whiskeysockets/Baileys",
      message: data.includes(id)
    });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Terjadi kesalahan saat mengirim pesan.');
        });
});

app.listen(port, () => {
    console.log(`Server berjalan di port:${port}`);
});