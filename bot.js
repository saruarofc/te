const TelegramBot = require("node-telegram-bot-api");

// Replace with your actual Telegram bot token
const token = "7631155869:AAFcDoMmf9707E-Bd3kVzbLA1Pbd5Uhmt-E";

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Log when the bot starts
console.log("Bot is running...");

// Handle the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello! I am your Telegram bot. How can I assist you today?");
});

// Handle errors
bot.on("polling_error", (error) => {
  console.error("Polling error:", error);
});

bot.on("webhook_error", (error) => {
  console.error("Webhook error:", error);
});
