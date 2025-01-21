

const {Bot, InlineKeyboard}= require("grammy");
const gamefCommand = require("./gamef");



const startCommand = (ctx)=>{

// const keyboard = new InlineKeyboard().game(gamefCommand);


   const keyboard = new InlineKeyboard()
   .text('Орел и решка', 'gameOne')
    .row()
    .text('Камень, ножницы, бумага', 'gameTwo')
    .row()
    .text('Угадай число', 'gameThree')

    ctx.reply('Выберите игру!',{reply_markup: keyboard });



};


module.exports=startCommand;