const TelegramBot = require("node-telegram-bot-api");

const token = "7631155869:AAFcDoMmf9707E-Bd3kVzbLA1Pbd5Uhmt-E"; // Replace with your token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Hello! I am your Telegram bot.");
});

console.log("Bot is running...");
