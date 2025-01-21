

min = Math.ceil(1);
max = Math.floor(50);


let results ={
    count: 0 ,
    wins: 0 ,
}

let user_number;

function foo3(user_number, ctx, rand_number){


if(rand_number == user_number){
    ctx.reply("Ого! Ты угадал");
    results.wins++;
    results.count++;
    
    ctx.reply(`Сыграно: ${results.count}, правильно угадано: ${results.wins}`);
}
else if(user_number < rand_number){
    ctx.reply("Маловато..")
    results.count++;
}
else if(user_number > rand_number){
    ctx.reply("Многовато...")
    results.count++;
}
console.log(rand_number);

}
module.exports= { foo3};

