import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN || '', {polling:true})

bot.on('message', (message:any) => {
  const chatId = message.chat.id;
  // console.log(message)
  if(message.text.includes('issue')){
    bot.sendMessage(chatId, 'Qual problema identificado?')
    return
  }
  if(message.text === '/1'){
    bot.sendMessage(chatId, 'Informe a descrição da imagem')
    return
  }
  if(message.text === '/2'){
    bot.sendMessage(chatId, 'Suas horas são 09:00')
    return
  }

  // console.log(message)
  bot.sendMessage(chatId, `Olá ${message.from.first_name} ${message.from.last_name}, como posso ajudar? \n
  /1 - Nova tarefa.
  /2 - Buscar horas.
  `);
});
