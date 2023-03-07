import express from 'express'
import 'dotenv/config'
import { Telegram } from './utils/telegram'
const telegram = new Telegram()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Telegram api' })
})

app.post(telegram.getUriWebhook(), async (req, res) => {

  const chatId = req.body.message.chat.id
  const text = req.body.message.text
  console.log(req.body.message)
  await telegram.sendMessage(chatId, text)
  
  res.status(200).send('ok')
})

app.listen(process.env.PORT || 8001, async () => {
  console.log('Server run http://localhost:8001');
  await telegram.initWebhook()
})