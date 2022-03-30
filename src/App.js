import { Notifyer } from "./Notifyer.js";

const App = {
    async start() {
        console.log('Reminder started');
        try {
            await Notifyer.init();
            Notifyer.notify
            ({
                title: 'ESCUTA AQUI', 
                description: '*APERTANDO BRAÇO*', 
                icon: './src/imgs/main_icon.png'
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export { App };