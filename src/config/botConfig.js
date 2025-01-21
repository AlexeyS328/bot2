const dotenv = require('dotenv')
dotenv.config({ path: '../.env'});

const config = {
    token: process.env.TOKEN, // Получаем токен из переменных окружения
    parse_mode:'HTML',
};

// console.log("AAAAAAAAAAAA", process.env);


module.exports = config;