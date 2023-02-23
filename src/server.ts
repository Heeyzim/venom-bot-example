import { create } from 'venom-bot';


async function start() {
    try {
        const bot =  await create({
            session: 'teste',
            multidevice: true,
            headless: true,
            useChrome: true,
            logQR: true,
            debug: true,
            
        })

        bot.onMessage((message) => {
            if (message.body === 'Hi' && message.isGroupMsg === false) {
                bot
                .sendText(message.from, 'Welcome Venom 🕷')
                .then((result) => {
                  console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //return object error
                });
            }
          });
    } catch (err) {
        console.log(err);
    }
}

start()

