const { Bot } = require('grammy');
const config = require('./config/botConfig');
const helpCommand = require('./commands/help');
const errorHandler = require('./middlewares/errorHandler');

const bot = new Bot(config.token); // Создаем бота

// Регистрируем команду /help
bot.command('help', helpCommand);

// Подключаем middleware для обработки ошибок
bot.use(errorHandler);

// Запускаем бота
bot.start();