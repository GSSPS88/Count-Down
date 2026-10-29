const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
console.log(newYear);

function updateCountDown() {
    const currentTime = new Date();
    const diff = newYear - currentTime;

    const d = Math.floor(diff/1000/60/60/24);
    days.innerHTML = d < 10 ? '0' + d: d;

    const h = Math.floor(diff/1000/60/60)%24;
    hours.innerHTML = h < 10 ? '0' + h: h;

    const m = Math.floor(diff/1000/60)%60;
    minutes.innerHTML = m < 10 ? '0' + m: m;

    const s = Math.floor(diff/1000)%60;
    seconds.innerHTML = s < 10 ? '0' + s: s;
}

setInterval(updateCountDown, 1000);