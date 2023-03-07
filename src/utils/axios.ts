import axios from "axios";

export const apiTelegram = axios.create({
  baseURL:`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}`
})