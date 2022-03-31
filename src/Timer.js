import { View } from "./View.js";
import { Emitter } from "./Emitter.js";
const Timer = {
    time: 60 * 60,
    currentTime: 0,
    interval: null,

    calculateTime: time => ({ minutes: Math.floor(time / 60), seconds: time % 60 }),

    fortmatTime: time => `${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`,

    countdown() {
        Timer.currentTime -= 1;
        if(Timer.currentTime === 0) {
            Emitter.emit('countdown-end');
            clearInterval(Timer.interval);
        }
        const formmatedTime = Timer.fortmatTime(Timer.calculateTime(Timer.currentTime));
        View.render(formmatedTime);
    },
    
    init(time) {
        Emitter.emit('countdown-start');
        Timer.time = time * 60 || Timer.time;
        Timer.currentTime = Timer.time;
        Timer.interval = setInterval(Timer.countdown, 1000);
    },
}

export { Timer }