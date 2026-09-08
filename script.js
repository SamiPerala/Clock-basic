const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const clockNumberContainer = document.querySelector('.clock-face-numbers-container');

let hasDrawnHours = false;



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
    console.log(secondHand)
}


function updateClock() {
    setInterval(setTime, 1000)
}

updateClock();