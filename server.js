var TelegramBot = require('node-telegram-bot-api');

var token = '276043456:AAHzIvPoLp54IXewyAhk6yby_vCB7d8J88s';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/insult/, function(msg, match) {
        var fromId = msg.from.id;
        var vomhMessages = ["멍멍", "사회생활 어렵다", "?????"];
        var chosenVomhMessages = [Math.floor(Math.random() * vomhMessages.length)];
        bot.sendMessage(fromId, chosenVomhMessages);
});

bot.onText(/\help/, function(msg, match){
        var fromId = msg.from.id;
        bot.sendMessage(fromId, "제가 뭘 알겠읍니까,,,,");
});
