import express from 'express'
import TelegramBot from 'node-telegram-bot-api'

const app = express()
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN , {polling:true})

app.get('/', (req, res) => {
  res.json({message: 'List api'})
})

bot.on('message', (message:any) => {
  const chatId = message.chat.id;
  // console.log(message)
  bot.sendMessage(chatId, `Olá ${message.from.first_name} ${message.from.last_name}, como posso ajudar?`);
});

app.listen(process.env.PORT || 8000, () => console.log('Server run http://localhost:8000') )