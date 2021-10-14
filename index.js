const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '2074673301:AAGi2TxH-n4ZQIxSAtCFlolNca2ngbktdAI';
const Agent = require('socks5-https-client/lib/Agent')

const bot = new TelegramBot(token, {
	polling: true,
	request: {
		agentClass: Agent,
		agentOptions: {
			socksHost: process.env.PROXY_SOCKS5_HOST,
			socksPort: 7890,
			// If authorization is needed:
			// socksUsername: process.env.PROXY_SOCKS5_USERNAME,
			// socksPassword: process.env.PROXY_SOCKS5_PASSWORD
		}
	}
})
// setInterval(async() => {
//   try {
//     // await bot.sendMessage("-728664513", "ssss");
//   } catch (error) {
//     console.log(error)
//   }
// }, 6000);
module.exports=bot
