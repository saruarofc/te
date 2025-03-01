<?php

$token = "7631155869:AAFcDoMmf9707E-Bd3kVzbLA1Pbd5Uhmt-E"; // Replace with your Telegram bot token
$update = json_decode(file_get_contents("php://input"), TRUE);
$chat_id = $update["message"]["chat"]["id"];
$text = $update["message"]["text"];

if ($text == "/start") {
    $message = "Hello! I am your Telegram bot.";
    file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message));
}

?>
