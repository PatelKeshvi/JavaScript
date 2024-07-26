let hours = 00;
let minutes = 00;
let seconds = 00;
let milliseconds = 00;

let h = document.querySelector("#hours");
let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");
let ms = document.querySelector("#milliseconds");
let start = document.querySelector("#startBtn");
let stop = document.querySelector("#stopBtn");
let reset = document.querySelector("#resetBtn");
let interval;

const startTimer = () => {

    milliseconds++;
    if (milliseconds < 10) {
        ms.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 10) {
        ms.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;
        s.innerHTML = seconds;
        milliseconds = 0;
        ms.innerHTML = "0" + 0;
    }

    if (seconds < 10) {
        s.innerHTML = "0" + seconds;
    }

    if (seconds > 10) {
        s.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        m.innerHTML = minutes;
        seconds = 0;
        s.innerHTML = "0" + 0;
    }

    if (minutes < 10) {
        m.innerHTML = "0" + minutes;
    }

    if (minutes > 10) {
        m.innerHTML = minutes;
    }

    if (minutes > 59) {
        hours++;
        h.innerHTML = hours;
        minutes = 0;
        m.innerHTML = "0" + 0;
    }

    if (hours < 10) {
        h.innerHTML = "0" + hours;
    }
}

start.addEventListener('click', () => {
    clearInterval(interval);
    var oneSecond = 10;
    interval = setInterval(startTimer, oneSecond);
})

stop.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    h.innerHTML = "0" + hours;
    m.innerHTML = "0" + minutes;
    s.innerHTML = "0" + seconds;
    ms.innerHTML = "0" + milliseconds;

})