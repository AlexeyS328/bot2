const { Bot } = require('grammy');
const config = require('./config/botConfig');


const helpCommand = require('./commands/help');
const startCommand = require('./commands/start');
const { gamefCommand, foo } = require('./commands/gamef');
const { gametCommand, foo2 } = require('./commands/gamet');
const {gamethCommand, foo3} = require('./commands/gameth');
 const errorHandler = require('./middlewares/errorHandler');

const bot = new Bot(config.token); // Создаем бота
// log

let states = {
    OREL: 'orel',
    KAMEN: 'kamen',
    NUMBER: 'number'
}
let curState = '';

let rand_number = 0;

// Регистрируем команды
bot.command('help', helpCommand);
bot.command('start', startCommand);
bot.command('gamef', gamefCommand);
bot.command('gamet', gametCommand);
bot.command('gameth', gamethCommand);

bot.on('callback_query:data', (ctx) =>{
    const data = ctx.callbackQuery.data;
    //////////////////////////////////////////////////////

    if(data === 'gameOne'){
        curState = states.OREL
        ctx.answerCallbackQuery('Вы выбрали <b>"орел и решка"</b>!')
       gamefCommand(ctx);
    }
    else if(data ==='gameTwo'){
        
        curState = states.KAMEN
        ctx.answerCallbackQuery('Вы выбрали <b>"Камень, ножницы, бумага"</b>!')
        gametCommand(ctx);
    }
    else if(data === 'gameThree'){
        curState = states.NUMBER
        ctx.answerCallbackQuery('Вы выбрали <b>"Угадай число"</b>!')
        rand_number = Math.floor(Math.random() * (max - min)) + min

        ctx.reply('Я загадал число от 1 до 50. Попробуй угадать!');
                /////////////////////////////////////////////////////
    } else if(data === 'choice1'){
        console.log('CHOISE 1');
        
        ctx.answerCallbackQuery('Вы выбрали <i>решку</i>');
        foo(1, ctx);


    }else if(data ==='choice2'){

        ctx.answerCallbackQuery('Вы выбрали <i>орла</i>');
        foo(0, ctx);

    }
    //////////////////////////////////////////////////////////
    else if(data ==='stone'){

        ctx.answerCallbackQuery('Вы выбрали <i>камень</i>');
        foo2(0, ctx);

    }
    else if(data ==='scissors'){

        ctx.answerCallbackQuery('Вы выбрали <i>камень</i>');
        foo2(1, ctx);

    }
    else if(data ==='leaf'){

        ctx.answerCallbackQuery('Вы выбрали <i>лист</i>');
        foo2(2, ctx);

    }

//////////////////////////////////////////////////////////////


    

});

bot.on(':text', (ctx) => {
    if(curState == states.NUMBER) {
        console.log('ВВЕЛ ЧИСЛО');
        console.log(ctx.message.text);
        user_number = ctx.message.text;
        
        foo3(ctx.message.text ,ctx, rand_number)


    }
});



// Подключаем middleware для обработки ошибок
// bot.use(errorHandler);

// Запускаем бота
bot.start();