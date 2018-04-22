const TeleBot = require('telebot');
const bot = new TeleBot('523041716:AAGBiNq28ygGpkMdQsdv3ziPMtiVxSCtEeE');

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
