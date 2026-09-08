const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const clockContainer = document.querySelector('.clock-container');

let hasDrawnHours = false;

function drawHours() {
    if (!hasDrawnHours){
     for (let i = 1; i <= 12; i++) {
      clockContainer.innerHTML += `
        <div class="number-container">
        <p class="hour-number">${i}</p>"
        </div>`
        console.log(i)
        if(i === 12) {
            hasDrawnHours = !hasDrawnHours;
        }
    } 
    } else
        return;
}

function setTime() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    hourHand.style.transform = `rotate(${hour*30}deg)`;
    minuteHand.style.transform = `rotate(${minute*6}deg)`;
    secondHand.style.transform = `rotate(${second*6}deg)`;
    
    
}


function updateClock() {
    do (hasDrawnHours) {
        drawHours()
    }
    setInterval(setTime, 1000)
}

updateClock();