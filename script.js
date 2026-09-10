//mab-clock-tick-1-20080713.wav by mab -- https://freesound.org/s/57211/ -- License: Attribution 3.0
//Bedside clock alarm.wav by Chelly01 -- https://freesound.org/s/541077/ -- License: Creative Commons 0


const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const clockNumberContainer = document.querySelector('.clock-face-numbers-container');
const alarmList = document.getElementById("alarm-list");

const setAlarmBtn = document.getElementById("set-alarm-btn");
const clearAlarmBtn = document.getElementById("clear-alarm-btn");
const stopAlarmBtn = document.getElementById("stop-alarm-toggle");

let deleteAlarmBtns = document.querySelectorAll(".remove-alarm-btn");

const tikSoundToggle = document.getElementById("tik-toggle");
const alarmHour = document.getElementById("alarm-hour");
const alarmMinute = document.getElementById("alarm-minute");
let alarmSound = new Audio();
let tikSound = new Audio();

let hasDrawnHours = false;
let index = localStorage.length;


async function playAlarm() {
    return await alarmSound?.play();
}
function setTime() {
    let numberRot = 30;
    let hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    let arrayOfAlarms = Object.values(localStorage);
    hour = hour + (minute * 1.67) / 100;

    if(!hasDrawnHours) {
        listAlarms()
        for (let i = 1; i <= 12; i++) {
      clockNumberContainer.innerHTML += `
        <div class="number-container" style="transform: rotate(${numberRot}deg);">
        <p class="hour-number" style="transform:  translate(0%, -440%) rotate(-${numberRot}deg);">${i}</p>
        </div>`
         numberRot += 30
    } 
       

    hasDrawnHours = !hasDrawnHours;
    }
    
    hourHand.style.transform = `rotate(${hour*30}deg)`;
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    secondHand.style.transform = `rotate(${second*6}deg)`;
    tikSound?.play();

    for(let i = 0; i < arrayOfAlarms.length; i++) { 
        if(Number(arrayOfAlarms[i].split(",")[0]) === hour) {
            console.log("got here")
            if(Number(arrayOfAlarms[i].split(",")[1]) === minute) {
                playAlarm()
            }
        }

    }
}



function updateClock() {
    setInterval(setTime, 1000)
}

function listAlarms() {
    let arrayOfAlarms = Object.values(localStorage);
    let arrayOfKeys = Object.keys(localStorage);

    alarmList.innerHTML = "";
    for(let i = 0; i < localStorage.length; i++) {
        alarmList.innerHTML += `
        
        <p class="alarm">${arrayOfAlarms[i].split(",")[0]}:${arrayOfAlarms[i].split(",")[1]}</p>
        <span><button id="${arrayOfKeys[i]}" class="remove-alarm-btn" onclick=removeAlarm(this)>X</button></span>
        
        `
    }
    

}


function removeAlarm(e) {
    localStorage.removeItem(e.id);
    listAlarms();
}

updateClock();

setAlarmBtn.addEventListener("click", () => {
    const alarmHour = document.getElementById("alarm-hour");
    const alarmMinute = document.getElementById("alarm-minute");
    localStorage.setItem('alarm-' + `${alarmHour.value}${alarmMinute.value}`, [alarmHour.value, alarmMinute.value])
    index += 1;
    listAlarms()
})

clearAlarmBtn.addEventListener("click", () => {
    localStorage.clear()
    index = 0;
    listAlarms()
} )
stopAlarmBtn.addEventListener("change", (e) => {
 if(!e.target.checked) {
        alarmSound = null;
    } else if (e.target.checked) {
        alarmSound = new Audio("./alarm.wav")
    } 
    
} )

//Make This work instead of onclick!
deleteAlarmBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    console.log("clicked delete btn")
    localStorage.delete(e.target.id)
    listAlarms()

})
})


tikSoundToggle.addEventListener("change", (e) => {
    if(!e.target.checked) {
        tikSound = null;
    } else if (e.target.checked) {
        tikSound = new Audio("./57211__mab__mab-clock-tick-1-20080713.wav")
    } 
})