"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_express = __toESM(require("express"));

// src/utils/telegram.ts
var import_node_telegram_bot_api = __toESM(require("node-telegram-bot-api"));
var bot = new import_node_telegram_bot_api.default(process.env.TELEGRAM_TOKEN || "", { polling: true });
bot.on("message", (message) => {
  const chatId = message.chat.id;
  if (message.text.includes("issue")) {
    bot.sendMessage(chatId, "Qual problema identificado?");
    return;
  }
  if (message.text === "/1") {
    bot.sendMessage(chatId, "Informe a descri\xE7\xE3o da imagem");
    return;
  }
  if (message.text === "/2") {
    bot.sendMessage(chatId, "Suas horas s\xE3o 09:00");
    return;
  }
  bot.sendMessage(chatId, `Ol\xE1 ${message.from.first_name} ${message.from.last_name}, como posso ajudar? 

  /1 - Nova tarefa.
  /2 - Buscar horas.
  `);
});

// src/server.ts
var app = (0, import_express.default)();
app.get("/", (req, res) => {
  res.json({ message: "List api" });
});
app.listen(process.env.PORT || 8001, () => console.log("Server run http://localhost:8001"));
