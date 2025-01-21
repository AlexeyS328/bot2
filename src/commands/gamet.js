const { InlineKeyboard } = require("grammy");
const gametCommand = (ctx)=>{


 const keyboard = new InlineKeyboard()
    .text('камень', 'stone')
    .text('ножницы', 'scissors')
    .text('бумага', 'leaf')
    ctx.reply('Выберите предмет!',{reply_markup: keyboard });

};

min = Math.ceil(0);
max = Math.floor(2);


let results = {
    count:0,
    correct:0,
}

    
function foo2(user_choice2, ctx) {
       
    var random = Math.floor(Math.random() * (max - min)) + min
    

 
    if (random == user_choice2 ) {
        ctx.reply('ничья');
        
    } else if(random == 1 && user_choice2 == 0) {
        ctx.reply('Вы выйграли');
        results.correct++;
    }
     else if(random == 2 && user_choice2 == 0) {
        ctx.reply('Вы проиграли');
    }
    else if(random == 0 && user_choice2 == 1) {
        ctx.reply('Вы проиграли');
    }
    else if(random == 0 && user_choice2 == 2) {
       ctx.reply('Вы выйграли');
       results.correct++;
   }
   else if(random == 1 && user_choice2 == 2) {
    ctx.reply('Вы проиграли');
}
 
    results.count++;
 
 
    ctx.reply(`Сыграно: ${results.count}, Вы победили: ${results.correct}`);
  
 
}



module.exports= {gametCommand, foo2};