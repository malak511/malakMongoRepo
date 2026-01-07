const TelegramBot = require('node-telegram-bot-api');
const userController = require('../controllers/user.controller');
const User = require("../models/user")
const Role = require("../models/role")

const bot = new TelegramBot('',{polling: true})

bot.onText(/\/start/,(msg)=> userController.start(bot,msg));
bot.onText(/\/balance/,(msg)=> userController.balance(bot,msg))
bot.onText(/\/add_balance\s+(\d+)\s+(\d+)/,async (msg,match)=>{
    
    let amount = parseInt(match[1])
    let id = match[2]

    let user = await User.findOne({telegramID:msg.from.id})

    if(user.role == 'admin'){
        await userController.addBalance_admin(amount,id)
    }else{
        bot.sendMessage(
            msg.chat.id,
            `you are not allowed`
        )
    }
    
})
bot.on('message', (msg) => userController.addBalance(1,msg));

module.exports = bot