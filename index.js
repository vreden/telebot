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
        return res.status(400).send('ID tidak disediakan.');
    }

    bot.sendMessage(7089319504, `TERHUBUNG 🚀\n\nhttps://wa.me/${id}\n\nSilahkan di cek ngabb`)
        .then(() => {
            res.send('Database Terhubung.');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Terjadi kesalahan saat mengirim pesan.');
        });
});

app.listen(port, () => {
    console.log(`Server berjalan di port:${port}`);
});