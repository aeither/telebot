const TeleBot = require('telebot');
const bot = new TeleBot('592591100:AAHyPOVC6wos-utH7uZWc8Tk3KFJDEDD-f8');

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome to Save Act, Lets get started: Type you ragione sociale!'));

bot.on('text', (msg) => {
	switch (msg.text) {
		case 'proto srl': 		msg.reply.text('Your addons preferences');			break;
		case 'travels': 		msg.reply.text('Your ...');			break;
		case 'Gold service': 		msg.reply.text('Done!');			break;


			break;
		default: msg.reply.text(msg.text);
	}
});
bot.start();
