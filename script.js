//mab-clock-tick-1-20080713.wav by mab -- https://freesound.org/s/57211/ -- License: Attribution 3.0
//Bedside clock alarm.wav by Chelly01 -- https://freesound.org/s/541077/ -- License: Creative Commons 0


const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const clockNumberContainer = document.querySelector('.clock-face-numbers-container');

const alarmBtn = document.getElementById("alarm-btn");
const tikSoundToggle = document.getElementById("tik-toggle");
const alarmHour = document.getElementById("alarm-hour");
const alarmMinute = document.getElementById("alarm-minute");
const alarmSound = new Audio("./alarm.wav");
let tikSound = new Audio();

let hasDrawnHours = false;

async function playAlarm() {
    return await alarmSound.play();
}

function setTime() {
    let numberRot = 30;
    if(!hasDrawnHours) {
        for (let i = 1; i <= 12; i++) {
      clockNumberContainer.innerHTML += `
        <div class="number-container" style="transform: rotate(${numberRot}deg);">
        <p class="hour-number" style="transform:  translate(0%, -440%) rotate(-${numberRot}deg);">${i}</p>
        </div>`
         numberRot += 30
    } 
       

    hasDrawnHours = !hasDrawnHours;
    }
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    hourHand.style.transform = `rotate(${hour*30}deg)`;
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    secondHand.style.transform = `rotate(${second*6}deg)`;
    tikSound?.play();
    console.log(hour, Number(alarmHour.value))
    if(hour === Number(alarmHour.value)&& minute === Number(alarmMinute.value)) {
        playAlarm()
    }
}

function updateClock() {
    setInterval(setTime, 1000)
}

updateClock();

alarmBtn.addEventListener("click", () => {
    const alarmHour = document.getElementById("alarm-hour");
    const alarmMinute = document.getElementById("alarm-minute");
    console.log(alarmHour.value, alarmMinute.value)
})

tikSoundToggle.addEventListener("change", (e) => {
    console.log("got here")
    if(!e.target.checked) {
        tikSound = null;
    } else if (e.target.checked) {
        tikSound = new Audio("./57211__mab__mab-clock-tick-1-20080713.wav")
    } 
})