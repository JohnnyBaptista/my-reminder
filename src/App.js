import { Notifyer } from "./Notifyer.js";
import { Emitter } from "./Emitter.js";
import { Timer } from "./Timer.js";

const notify = Notifyer.notify
({
    title: 'Start your task nooow!!', 
    description: 'This is a reminder for your task!', 
    icon: './src/imgs/main_icon.png'
});

const App = {
    async start() {
        console.log('Reminder started');
        try {
            await Notifyer.init();
            Emitter.on('countdown-start', notify);
            Emitter.on('countdown-end', Timer.init)
            Timer.init(0.1);
        } catch (error) {
            console.error(error);
        }
    }
}

export { App };
