require('dotenv').config();


const config = {
    token: process.env.TELEGRAM_BOT_TOKEN, // Получаем токен из переменных окружения
};

module.exports = config;