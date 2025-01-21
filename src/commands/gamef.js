const { InlineKeyboard } = require("grammy");

const gamefCommand = (ctx)=>{
    
    const keyboard = new InlineKeyboard()
    .text('1 (решка)', 'choice1')
    .text('0 (орел)', 'choice2')
    ctx.reply('Выберите число!',{reply_markup: keyboard });

};



let results = {
    count:0,
    correct:0,
}

    
function foo(user_choice, ctx) {
       
    const random = Math.random() < 0.5 ? '0' : '1';
    
 
    if (user_choice != '0' && user_choice != '1') {
        ctx.reply('Введена неверная ставка. Необходимо ввести 0(орел) или 1(решка)');
        return foo();
    } 
 
    if (random == user_choice) {
        ctx.reply('Вы угадали');
        results.correct++;
    } else {
        ctx.reply('Вы не угадали');
    }
 
    results.count++;
 
 
    ctx.reply(`Сыграно: ${results.count}, правильно угадано: ${results.correct}`);
  
 
}
module.exports= {gamefCommand, foo};