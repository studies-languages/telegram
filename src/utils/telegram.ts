import { apiTelegram } from "./axios"

export class Telegram {

  #uri = `/webhook/${process.env.TELEGRAM_TOKEN}`
  #webhookURL = `${process.env.SERVER_URL}${this.#uri}`

  async initWebhook() {
    const { data } = await apiTelegram('/setWebhook', {
      params:{
        url:this.#webhookURL
      }
    })
    console.log(data)
  }

  getUriWebhook() {
    return this.#uri
  }

  async sendMessage(chatId:number, text:string){
    await apiTelegram.post('/sendMessage', {
      chat_id: chatId,
      text
    })
  }
}

